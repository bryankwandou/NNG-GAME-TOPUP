"""
Image generation backend using Diffusers, FLUX, and Stable Diffusion.
"""

from typing import Optional, List
from abc import ABC, abstractmethod
from pathlib import Path
import asyncio


class ImageGenerationBackend(ABC):
    """Abstract base for image generation."""
    
    @abstractmethod
    async def generate(self, prompt: str, num_inference_steps: int = 20,
                      guidance_scale: float = 7.5, height: int = 512, 
                      width: int = 512, seed: Optional[int] = None, **kwargs):
        """Generate image from prompt."""
        pass


class DiffusersBackend(ImageGenerationBackend):
    """Diffusers-based image generation (SDXL, SD Turbo, etc.)."""
    
    def __init__(self, model_id: str = "stabilityai/sdxl-turbo"):
        self.model_id = model_id
        self.pipeline = None
        self.device = "cuda" if self._has_cuda() else "cpu"
        self._load_pipeline()
    
    def _has_cuda(self) -> bool:
        """Check if CUDA available."""
        try:
            import torch
            return torch.cuda.is_available()
        except:
            return False
    
    def _load_pipeline(self):
        """Load diffusion pipeline."""
        try:
            from diffusers import AutoPipelineForText2Image
            import torch
            
            self.pipeline = AutoPipelineForText2Image.from_pretrained(
                self.model_id,
                torch_dtype=torch.float16 if self._has_cuda() else torch.float32,
                device_map="auto" if self._has_cuda() else None,
            )
            
            if self._has_cuda():
                self.pipeline.enable_attention_slicing()
                try:
                    self.pipeline.enable_xformers_memory_efficient_attention()
                except:
                    pass
        except Exception as e:
            raise RuntimeError(f"Failed to load pipeline {self.model_id}: {str(e)}")
    
    async def generate(self, prompt: str, num_inference_steps: int = 20,
                      guidance_scale: float = 7.5, height: int = 512, 
                      width: int = 512, seed: Optional[int] = None, **kwargs):
        """Generate image."""
        if not self.pipeline:
            raise RuntimeError("Pipeline not initialized")
        
        import torch
        
        loop = asyncio.get_event_loop()
        
        def _generate():
            generator = None
            if seed is not None:
                generator = torch.Generator(device=self.device).manual_seed(seed)
            
            return self.pipeline(
                prompt=prompt,
                height=height,
                width=width,
                num_inference_steps=num_inference_steps,
                guidance_scale=guidance_scale,
                generator=generator,
            ).images[0]
        
        image = await loop.run_in_executor(None, _generate)
        return image


class FLUXBackend(ImageGenerationBackend):
    """FLUX.1 image generation (high quality, slower)."""
    
    def __init__(self, model_id: str = "black-forest-labs/FLUX.1-dev"):
        self.model_id = model_id
        self.pipeline = None
        self.device = "cuda" if self._has_cuda() else "cpu"
        self._load_pipeline()
    
    def _has_cuda(self) -> bool:
        """Check if CUDA available."""
        try:
            import torch
            return torch.cuda.is_available()
        except:
            return False
    
    def _load_pipeline(self):
        """Load FLUX pipeline."""
        try:
            from diffusers import FluxPipeline
            import torch
            
            self.pipeline = FluxPipeline.from_pretrained(
                self.model_id,
                torch_dtype=torch.bfloat16,
                device_map="auto" if self._has_cuda() else None,
            )
        except Exception as e:
            raise RuntimeError(f"Failed to load FLUX pipeline: {str(e)}")
    
    async def generate(self, prompt: str, num_inference_steps: int = 20,
                      guidance_scale: float = 7.5, height: int = 512, 
                      width: int = 512, seed: Optional[int] = None, **kwargs):
        """Generate image with FLUX."""
        if not self.pipeline:
            raise RuntimeError("FLUX pipeline not initialized")
        
        import torch
        
        loop = asyncio.get_event_loop()
        
        def _generate():
            generator = None
            if seed is not None:
                generator = torch.Generator(device=self.device).manual_seed(seed)
            
            return self.pipeline(
                prompt=prompt,
                height=height,
                width=width,
                num_inference_steps=num_inference_steps,
                guidance_scale=guidance_scale,
                generator=generator,
                output_type="pil",
            ).images[0]
        
        image = await loop.run_in_executor(None, _generate)
        return image


# Factory function
async def create_image_backend(model_id: str) -> ImageGenerationBackend:
    """Create appropriate image generation backend."""
    if "flux" in model_id.lower():
        return FLUXBackend(model_id=model_id)
    else:
        return DiffusersBackend(model_id=model_id)
