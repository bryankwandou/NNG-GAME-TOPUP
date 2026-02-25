"""
Audio and music generation backend using MusicGen.
"""

from typing import Optional
from pathlib import Path
import asyncio
from abc import ABC, abstractmethod


class AudioGenerationBackend(ABC):
    """Abstract base for audio generation."""
    
    @abstractmethod
    async def generate(self, prompt: str, duration_sec: int = 8,
                      temperature: float = 1.0, top_k: int = 250,
                      top_p: float = 0.0, seed: Optional[int] = None, **kwargs) -> Path:
        """Generate audio from prompt. Returns path to audio file."""
        pass


class MusicGenBackend(AudioGenerationBackend):
    """MusicGen-based audio generation."""
    
    def __init__(self, model_id: str = "facebook/musicgen-large"):
        self.model_id = model_id
        self.model = None
        self.device = "cuda" if self._has_cuda() else "cpu"
        self._load_model()
    
    def _has_cuda(self) -> bool:
        """Check if CUDA available."""
        try:
            import torch
            return torch.cuda.is_available()
        except:
            return False
    
    def _load_model(self):
        """Load MusicGen model."""
        try:
            from audiocraft.models import MusicGen
            self.model = MusicGen.get_model(self.model_id)
            if self._has_cuda():
                self.model = self.model.to(self.device)
        except Exception as e:
            raise RuntimeError(f"Failed to load MusicGen: {str(e)}")
    
    async def generate(self, prompt: str, duration_sec: int = 8,
                      temperature: float = 1.0, top_k: int = 250,
                      top_p: float = 0.0, seed: Optional[int] = None, **kwargs) -> Path:
        """Generate music."""
        if not self.model:
            raise RuntimeError("MusicGen model not initialized")
        
        loop = asyncio.get_event_loop()
        
        def _generate():
            import torch
            from pathlib import Path
            import tempfile
            
            # Set seed if provided
            if seed is not None:
                torch.manual_seed(seed)
            
            # Generate audio
            self.model.set_generation_params(
                max_duration=duration_sec,
                temperature=temperature,
                top_k=top_k,
                top_p=top_p,
            )
            
            descriptions = [prompt]
            wav = self.model.generate(descriptions)
            
            # Save to temp file
            output_path = Path(tempfile.gettempdir()) / f"music_{hash(prompt) % 10000}.wav"
            
            # Save using torchaudio
            import torchaudio
            torchaudio.save(str(output_path), wav[0].cpu(), 16000)
            
            return output_path
        
        audio_path = await loop.run_in_executor(None, _generate)
        return audio_path


# Factory function
async def create_audio_backend(model_id: str) -> AudioGenerationBackend:
    """Create appropriate audio generation backend."""
    if "musicgen" in model_id.lower():
        return MusicGenBackend(model_id=model_id)
    else:
        raise ValueError(f"Unknown audio model: {model_id}")
