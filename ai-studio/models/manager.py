"""
Unified Model Manager - Routes requests to appropriate backends.
Central orchestration point for all AI model operations.
"""

from typing import Optional, AsyncGenerator, Union, Dict, Any, List
from models.registry import ModelRegistry, ModelMetadata, CapabilityTag, BackendType
from utils.hardware import detect_hardware, HardwareInfo
from utils.config import settings
from utils.logging import logger
from pathlib import Path
import asyncio


class ModelManager:
    """Central model management and routing."""
    
    def __init__(self):
        self.registry = ModelRegistry()
        self.hardware = detect_hardware()
        self.active_backends: Dict[str, Any] = {}
        
        logger.info(f"ModelManager initialized")
        logger.info(f"Hardware: {self.hardware.cpu_cores} CPUs, {self.hardware.total_ram_gb:.1f}GB RAM, GPU: {self.hardware.has_nvidia_gpu}")
    
    async def get_backend(self, model_id: str):
        """Get or create backend for model."""
        if model_id in self.active_backends:
            return self.active_backends[model_id]
        
        model = self.registry.get(model_id)
        if not model:
            raise ValueError(f"Unknown model: {model_id}")
        
        backend = await self._create_backend(model)
        self.active_backends[model_id] = backend
        return backend
    
    async def _create_backend(self, model: ModelMetadata):
        """Create appropriate backend for model."""
        
        if model.backend == BackendType.LOCAL_LLM:
            from models.llm_local import create_llm_backend
            return await create_llm_backend(
                model_id=model.ollama_name or model.id,
                backend_type="ollama"
            )
        
        elif model.backend == BackendType.LOCAL_DIFFUSION:
            from models.diffusion import create_image_backend
            return await create_image_backend(model_id=model.id)
        
        elif model.backend == BackendType.LOCAL_VIDEO:
            from models.video_gen import create_video_backend
            return await create_video_backend(model_id=model.id)
        
        elif model.backend == BackendType.LOCAL_AUDIO:
            from models.audio_gen import create_audio_backend
            return await create_audio_backend(model_id=model.id)
        
        elif model.backend == BackendType.LOCAL_SPEECH:
            from models.speech import create_stt_backend, create_tts_backend
            if "whisper" in model.id:
                return await create_stt_backend()
            else:
                return await create_tts_backend()
        
        elif model.backend == BackendType.REMOTE_API:
            from models.llm_remote import create_remote_backend
            
            # Get API key from settings
            api_key = None
            if model.api_provider == "openai":
                api_key = settings.openai_api_key
            elif model.api_provider == "anthropic":
                api_key = settings.anthropic_api_key
            elif model.api_provider == "gemini":
                api_key = settings.gemini_api_key
            elif model.api_provider == "groq":
                api_key = settings.groq_api_key
            
            if not api_key:
                raise ValueError(f"API key not configured for {model.api_provider}")
            
            return await create_remote_backend(
                api_provider=model.api_provider,
                api_key=api_key,
                model=model.id
            )
        
        else:
            raise ValueError(f"Unknown backend type: {model.backend}")
    
    # ========== Text Generation ==========
    
    async def generate_text(self, model_id: str, prompt: str, 
                           max_tokens: int = 2048, temperature: float = 0.7,
                           **kwargs) -> AsyncGenerator[str, None]:
        """Generate text from prompt (streaming)."""
        logger.debug(f"generate_text: model={model_id}, prompt_len={len(prompt)}")
        
        backend = await self.get_backend(model_id)
        
        async for chunk in backend.generate_text(
            prompt=prompt,
            max_tokens=max_tokens,
            temperature=temperature,
            **kwargs
        ):
            yield chunk
    
    async def generate_text_batch(self, model_id: str, prompts: List[str],
                                 **kwargs) -> List[str]:
        """Generate text for multiple prompts."""
        logger.debug(f"generate_text_batch: model={model_id}, count={len(prompts)}")
        
        backend = await self.get_backend(model_id)
        return await backend.generate_text_batch(prompts, **kwargs)
    
    async def stream_chat(self, model_id: str, messages: List[Dict[str, str]],
                         **kwargs) -> AsyncGenerator[str, None]:
        """Stream chat completions."""
        logger.debug(f"stream_chat: model={model_id}, messages={len(messages)}")
        
        backend = await self.get_backend(model_id)
        
        async for chunk in backend.stream_chat(messages, **kwargs):
            yield chunk
    
    # ========== Image Generation ==========
    
    async def generate_image(self, model_id: str, prompt: str,
                            height: int = 512, width: int = 512,
                            num_inference_steps: int = 20,
                            guidance_scale: float = 7.5,
                            seed: Optional[int] = None, **kwargs):
        """Generate image from prompt."""
        logger.info(f"generate_image: model={model_id}, prompt={prompt[:50]}")
        
        backend = await self.get_backend(model_id)
        
        image = await backend.generate(
            prompt=prompt,
            height=height,
            width=width,
            num_inference_steps=num_inference_steps,
            guidance_scale=guidance_scale,
            seed=seed,
            **kwargs
        )
        
        return image
    
    # ========== Video Generation ==========
    
    async def generate_video(self, model_id: str, prompt: str,
                            duration_sec: int = 4,
                            height: int = 480, width: int = 720,
                            fps: int = 24,
                            seed: Optional[int] = None, **kwargs) -> Path:
        """Generate video from prompt."""
        logger.info(f"generate_video: model={model_id}, prompt={prompt[:50]}")
        
        backend = await self.get_backend(model_id)
        
        video_path = await backend.generate(
            prompt=prompt,
            duration_sec=duration_sec,
            height=height,
            width=width,
            fps=fps,
            seed=seed,
            **kwargs
        )
        
        return video_path
    
    # ========== Audio Generation ==========
    
    async def generate_audio(self, model_id: str, prompt: str,
                            duration_sec: int = 8,
                            temperature: float = 1.0,
                            seed: Optional[int] = None, **kwargs) -> Path:
        """Generate audio/music from prompt."""
        logger.info(f"generate_audio: model={model_id}, prompt={prompt[:50]}")
        
        backend = await self.get_backend(model_id)
        
        audio_path = await backend.generate(
            prompt=prompt,
            duration_sec=duration_sec,
            temperature=temperature,
            seed=seed,
            **kwargs
        )
        
        return audio_path
    
    # ========== Speech ==========
    
    async def transcribe_audio(self, model_id: str, audio_path: str,
                             language: Optional[str] = None) -> str:
        """Transcribe audio to text."""
        logger.info(f"transcribe_audio: model={model_id}, file={audio_path}")
        
        backend = await self.get_backend(model_id)
        text = await backend.transcribe(audio_path, language=language)
        return text
    
    async def synthesize_speech(self, model_id: str, text: str,
                              speaker_audio: Optional[str] = None,
                              language: str = "en") -> Path:
        """Synthesize speech from text."""
        logger.info(f"synthesize_speech: model={model_id}, text_len={len(text)}")
        
        backend = await self.get_backend(model_id)
        audio_path = await backend.synthesize(
            text=text,
            speaker_audio=speaker_audio,
            language=language
        )
        return audio_path
    
    # ========== Model Info & Recommendations ==========
    
    def get_model_info(self, model_id: str) -> Optional[Dict[str, Any]]:
        """Get model metadata."""
        model = self.registry.get(model_id)
        if not model:
            return None
        
        return {
            "id": model.id,
            "name": model.name,
            "description": model.description,
            "backend": model.backend.value,
            "capabilities": [cap.value for cap in model.capabilities],
            "installed": model.installed,
            "offline_available": model.offline_available,
            "min_vram_gb": model.min_vram_gb,
            "recommended_vram_gb": model.recommended_vram_gb,
            "min_ram_gb": model.min_ram_gb,
        }
    
    def list_models(self) -> List[Dict[str, Any]]:
        """List all available models."""
        return [self.get_model_info(model.id) for model in self.registry.list_all()]
    
    def recommend_model(self, capability: str, offline_only: bool = False) -> Optional[str]:
        """Recommend best model for capability."""
        try:
            cap = CapabilityTag[capability.upper()]
        except KeyError:
            logger.warning(f"Unknown capability: {capability}")
            return None
        
        model = self.registry.find_best_for_capability(
            capability=cap,
            vram_gb=self.hardware.gpu_vram_gb,
            ram_gb=self.hardware.available_ram_gb,
            offline_only=offline_only
        )
        
        return model.id if model else None
    
    def get_hardware_info(self) -> Dict[str, Any]:
        """Get hardware information."""
        return {
            "cpu_cores": self.hardware.cpu_cores,
            "cpu_logical": self.hardware.cpu_count_logical,
            "ram_gb": self.hardware.total_ram_gb,
            "available_ram_gb": self.hardware.available_ram_gb,
            "has_nvidia_gpu": self.hardware.has_nvidia_gpu,
            "gpu_name": self.hardware.gpu_name,
            "gpu_vram_gb": self.hardware.gpu_vram_gb,
            "has_mps": self.hardware.has_mps,
            "platform": self.hardware.platform,
        }
    
    def get_capabilities(self) -> List[str]:
        """List all available capabilities."""
        return [cap.value for cap in CapabilityTag]


# Global instance
model_manager = ModelManager()
