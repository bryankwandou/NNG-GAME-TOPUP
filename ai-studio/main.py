"""
FastAPI application - Main AI Studio API server.
Provides REST endpoints for all multimodal AI capabilities.
"""

from fastapi import FastAPI, File, UploadFile, HTTPException, BackgroundTasks, Query
from fastapi.responses import FileResponse, StreamingResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional, Dict, Any
import asyncio
import json
from pathlib import Path
import uuid
from datetime import datetime

from models.manager import model_manager
from utils.config import settings
from utils.logging import logger

# ========== Data Models ==========

class ChatMessage(BaseModel):
    role: str  # "user" or "assistant"
    content: str


class ChatRequest(BaseModel):
    messages: List[ChatMessage]
    model_id: str
    temperature: Optional[float] = 0.7
    max_tokens: Optional[int] = 2048
    offline_mode: bool = True


class TextGenerationRequest(BaseModel):
    prompt: str
    model_id: str
    temperature: Optional[float] = 0.7
    max_tokens: Optional[int] = 2048
    offline_mode: bool = True


class ImageGenerationRequest(BaseModel):
    prompt: str
    model_id: str
    height: Optional[int] = 512
    width: Optional[int] = 512
    num_inference_steps: Optional[int] = 20
    guidance_scale: Optional[float] = 7.5
    seed: Optional[int] = None
    offline_mode: bool = True


class VideoGenerationRequest(BaseModel):
    prompt: str
    model_id: str
    duration_sec: Optional[int] = 4
    height: Optional[int] = 480
    width: Optional[int] = 720
    fps: Optional[int] = 24
    seed: Optional[int] = None


class AudioGenerationRequest(BaseModel):
    prompt: str
    model_id: str
    duration_sec: Optional[int] = 8
    temperature: Optional[float] = 1.0
    seed: Optional[int] = None


class TranscriptionRequest(BaseModel):
    language: Optional[str] = None


class SynthesisRequest(BaseModel):
    text: str
    model_id: str
    language: Optional[str] = "en"


# ========== FastAPI App Setup ==========

app = FastAPI(
    title="AI Studio API",
    description="Multimodal AI generation and analysis platform",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Job tracking
active_jobs: Dict[str, Dict[str, Any]] = {}


# ========== Health & Info Endpoints ==========

@app.get("/health")
async def health_check():
    """Health check endpoint."""
    return {
        "status": "ok",
        "timestamp": datetime.utcnow().isoformat(),
        "models_available": len(model_manager.list_models()),
        "hardware": model_manager.get_hardware_info(),
    }


@app.get("/api/models")
async def list_models():
    """List all available models."""
    return {
        "models": model_manager.list_models(),
        "capabilities": model_manager.get_capabilities(),
    }


@app.get("/api/models/{model_id}")
async def get_model(model_id: str):
    """Get specific model info."""
    info = model_manager.get_model_info(model_id)
    if not info:
        raise HTTPException(status_code=404, detail="Model not found")
    return info


@app.get("/api/recommendations")
async def get_recommendations(capability: str, offline_only: bool = False):
    """Get recommended model for capability."""
    model_id = model_manager.recommend_model(capability, offline_only=offline_only)
    if not model_id:
        raise HTTPException(status_code=404, detail="No suitable model found")
    
    return {
        "capability": capability,
        "recommended_model": model_manager.get_model_info(model_id),
        "hardware": model_manager.get_hardware_info(),
    }


@app.get("/api/hardware")
async def get_hardware_info():
    """Get hardware information."""
    return model_manager.get_hardware_info()


# ========== Chat & Text Generation Endpoints ==========

@app.post("/api/chat")
async def chat(request: ChatRequest):
    """Stream chat completions."""
    
    messages = [{"role": msg.role, "content": msg.content} for msg in request.messages]
    
    async def generate():
        try:
            async for chunk in model_manager.stream_chat(
                model_id=request.model_id,
                messages=messages,
                temperature=request.temperature,
                max_tokens=request.max_tokens,
            ):
                yield f"data: {json.dumps({'content': chunk})}\n"
        except Exception as e:
            logger.error(f"Chat error: {str(e)}")
            yield f"data: {json.dumps({'error': str(e)})}\n"
    
    return StreamingResponse(generate(), media_type="text/event-stream")


@app.post("/api/generate-text")
async def generate_text(request: TextGenerationRequest):
    """Generate text from prompt (streaming)."""
    
    async def generate():
        try:
            async for chunk in model_manager.generate_text(
                model_id=request.model_id,
                prompt=request.prompt,
                temperature=request.temperature,
                max_tokens=request.max_tokens,
            ):
                yield f"data: {json.dumps({'content': chunk})}\n"
        except Exception as e:
            logger.error(f"Text generation error: {str(e)}")
            yield f"data: {json.dumps({'error': str(e)})}\n"
    
    return StreamingResponse(generate(), media_type="text/event-stream")


@app.post("/api/generate-text-batch")
async def generate_text_batch(prompts: List[str], model_id: str, temperature: float = 0.7):
    """Generate text for multiple prompts."""
    try:
        results = await model_manager.generate_text_batch(
            model_id=model_id,
            prompts=prompts,
            temperature=temperature,
        )
        return {"results": results}
    except Exception as e:
        logger.error(f"Batch text generation error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


# ========== Image Generation Endpoint ==========

@app.post("/api/generate-image")
async def generate_image(request: ImageGenerationRequest, background_tasks: BackgroundTasks):
    """Generate image from prompt."""
    job_id = str(uuid.uuid4())
    
    async def generate():
        try:
            active_jobs[job_id] = {"status": "running", "progress": 0}
            
            image = await model_manager.generate_image(
                model_id=request.model_id,
                prompt=request.prompt,
                height=request.height,
                width=request.width,
                num_inference_steps=request.num_inference_steps,
                guidance_scale=request.guidance_scale,
                seed=request.seed,
            )
            
            active_jobs[job_id] = {"status": "completed", "image_path": str(image)}
        except Exception as e:
            logger.error(f"Image generation error: {str(e)}")
            active_jobs[job_id] = {"status": "failed", "error": str(e)}
    
    asyncio.create_task(generate())
    
    return {"job_id": job_id, "status": "processing"}


@app.get("/api/jobs/{job_id}")
async def get_job_status(job_id: str):
    """Get status of a generation job."""
    if job_id not in active_jobs:
        raise HTTPException(status_code=404, detail="Job not found")
    
    return active_jobs[job_id]


@app.get("/api/results/{job_id}")
async def get_result_file(job_id: str):
    """Download result file from a completed job."""
    if job_id not in active_jobs:
        raise HTTPException(status_code=404, detail="Job not found")
    
    job = active_jobs[job_id]
    if job["status"] != "completed":
        raise HTTPException(status_code=400, detail="Job not completed")
    
    file_path = Path(job["image_path"])
    if not file_path.exists():
        raise HTTPException(status_code=404, detail="Result file not found")
    
    return FileResponse(file_path, media_type="image/png")


# ========== Video Generation Endpoint ==========

@app.post("/api/generate-video")
async def generate_video(request: VideoGenerationRequest):
    """Generate video from prompt."""
    job_id = str(uuid.uuid4())
    
    async def generate():
        try:
            active_jobs[job_id] = {"status": "running", "progress": 0}
            
            video_path = await model_manager.generate_video(
                model_id=request.model_id,
                prompt=request.prompt,
                duration_sec=request.duration_sec,
                height=request.height,
                width=request.width,
                fps=request.fps,
                seed=request.seed,
            )
            
            active_jobs[job_id] = {"status": "completed", "video_path": str(video_path)}
        except Exception as e:
            logger.error(f"Video generation error: {str(e)}")
            active_jobs[job_id] = {"status": "failed", "error": str(e)}
    
    asyncio.create_task(generate())
    
    return {"job_id": job_id, "status": "processing"}


# ========== Audio Generation Endpoint ==========

@app.post("/api/generate-audio")
async def generate_audio(request: AudioGenerationRequest):
    """Generate audio/music from prompt."""
    job_id = str(uuid.uuid4())
    
    async def generate():
        try:
            active_jobs[job_id] = {"status": "running", "progress": 0}
            
            audio_path = await model_manager.generate_audio(
                model_id=request.model_id,
                prompt=request.prompt,
                duration_sec=request.duration_sec,
                temperature=request.temperature,
                seed=request.seed,
            )
            
            active_jobs[job_id] = {"status": "completed", "audio_path": str(audio_path)}
        except Exception as e:
            logger.error(f"Audio generation error: {str(e)}")
            active_jobs[job_id] = {"status": "failed", "error": str(e)}
    
    asyncio.create_task(generate())
    
    return {"job_id": job_id, "status": "processing"}


# ========== Speech Endpoints ==========

@app.post("/api/transcribe")
async def transcribe(
    file: UploadFile = File(...),
    model_id: str = Query("whisper-base"),
    language: Optional[str] = None
):
    """Transcribe audio file."""
    try:
        import tempfile
        
        # Save uploaded file temporarily
        with tempfile.NamedTemporaryFile(delete=False, suffix=".wav") as tmp:
            content = await file.read()
            tmp.write(content)
            tmp_path = tmp.name
        
        # Transcribe
        text = await model_manager.transcribe_audio(
            model_id=model_id,
            audio_path=tmp_path,
            language=language,
        )
        
        # Clean up
        Path(tmp_path).unlink()
        
        return {"text": text, "language": language}
    except Exception as e:
        logger.error(f"Transcription error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/synthesize")
async def synthesize_speech(request: SynthesisRequest):
    """Synthesize speech from text."""
    try:
        audio_path = await model_manager.synthesize_speech(
            model_id=request.model_id,
            text=request.text,
            language=request.language,
        )
        
        return FileResponse(audio_path, media_type="audio/wav")
    except Exception as e:
        logger.error(f"Synthesis error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


# ========== Settings Endpoints ==========

@app.get("/api/settings")
async def get_settings():
    """Get current settings."""
    return {
        "gpu_available": settings.gpu_available,
        "enable_offline_mode": settings.enable_offline_mode,
        "enable_online_mode": settings.enable_online_mode,
        "enable_video_gen": settings.enable_video_gen,
        "enable_music_gen": settings.enable_music_gen,
        "enable_trading_agent": settings.enable_trading_agent,
    }


@app.post("/api/settings")
async def update_settings(settings_update: Dict[str, Any]):
    """Update settings."""
    # TODO: Implement persistent settings update
    return {"status": "settings updated"}


if __name__ == "__main__":
    import uvicorn
    
    logger.info(f"Starting AI Studio API on {settings.ai_studio_host}:{settings.ai_studio_port}")
    
    uvicorn.run(
        app,
        host=settings.ai_studio_host,
        port=settings.ai_studio_port,
        debug=settings.ai_studio_debug,
    )
