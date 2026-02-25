"""
Speech recognition and synthesis backends.
Whisper for STT, XTTS for TTS.
"""

from typing import Optional
from pathlib import Path
import asyncio
from abc import ABC, abstractmethod


class SpeechBackend(ABC):
    """Abstract base for speech operations."""
    pass


class WhisperBackend(SpeechBackend):
    """Whisper-based speech-to-text."""
    
    def __init__(self, model_size: str = "base"):
        self.model_size = model_size
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
        """Load Whisper model."""
        try:
            import whisper
            self.model = whisper.load_model(self.model_size, device=self.device)
        except Exception as e:
            raise RuntimeError(f"Failed to load Whisper: {str(e)}")
    
    async def transcribe(self, audio_path: str, language: Optional[str] = None) -> str:
        """Transcribe audio file."""
        if not self.model:
            raise RuntimeError("Whisper model not initialized")
        
        loop = asyncio.get_event_loop()
        
        def _transcribe():
            result = self.model.transcribe(audio_path, language=language)
            return result["text"]
        
        transcription = await loop.run_in_executor(None, _transcribe)
        return transcription


class XTTSBackend(SpeechBackend):
    """XTTS v2 text-to-speech with voice cloning."""
    
    def __init__(self):
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
        """Load XTTS model."""
        try:
            from TTS.models.gpt_sod import GPTSoDModel
            from TTS.configs.xtts_config import XttsConfig
            
            config = XttsConfig()
            self.model = GPTSoDModel.init_from_config(config)
            self.model = self.model.to(self.device)
        except Exception as e:
            raise RuntimeError(f"Failed to load XTTS: {str(e)}")
    
    async def synthesize(self, text: str, speaker_audio: Optional[str] = None,
                        language: str = "en", speed: float = 1.0) -> Path:
        """Synthesize speech from text."""
        if not self.model:
            raise RuntimeError("XTTS model not initialized")
        
        loop = asyncio.get_event_loop()
        
        def _synthesize():
            from pathlib import Path
            import tempfile
            
            # This is a simplified implementation
            # Actual XTTS usage requires proper speaker embedding
            
            output_path = Path(tempfile.gettempdir()) / f"speech_{hash(text) % 10000}.wav"
            print(f"Synthesizing: {text}")
            
            # TODO: Implement actual XTTS inference
            
            return output_path
        
        audio_path = await loop.run_in_executor(None, _synthesize)
        return audio_path


# Factory functions
async def create_stt_backend(model_size: str = "base") -> WhisperBackend:
    """Create Whisper STT backend."""
    return WhisperBackend(model_size=model_size)


async def create_tts_backend() -> XTTSBackend:
    """Create XTTS TTS backend."""
    return XTTSBackend()
