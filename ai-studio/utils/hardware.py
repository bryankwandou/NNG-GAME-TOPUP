"""
Hardware detection and capability analysis.
Identifies available GPU, VRAM, CPU cores for model selection.
"""

import os
import psutil
from dataclasses import dataclass
from typing import Optional
from pathlib import Path

try:
    import torch
    TORCH_AVAILABLE = True
except ImportError:
    TORCH_AVAILABLE = False

try:
    import pynvml
    NVIDIA_AVAILABLE = True
except ImportError:
    NVIDIA_AVAILABLE = False


@dataclass
class HardwareInfo:
    """System hardware capabilities."""
    cpu_cores: int
    cpu_count_logical: int
    total_ram_gb: float
    available_ram_gb: float
    
    has_nvidia_gpu: bool = False
    gpu_name: Optional[str] = None
    gpu_vram_gb: float = 0.0
    gpu_compute_capability: Optional[str] = None
    
    has_mps: bool = False  # Apple Metal Performance Shaders
    
    platform: str = "unknown"  # windows, linux, darwin
    
    def get_recommended_model(self) -> str:
        """Recommend a model based on hardware."""
        if self.has_nvidia_gpu and self.gpu_vram_gb >= 16:
            return "llama-3.1-70b-instruct"
        elif self.has_nvidia_gpu and self.gpu_vram_gb >= 10:
            return "llama-3.1-13b-instruct"
        elif self.has_nvidia_gpu and self.gpu_vram_gb >= 6:
            return "llama-3.1-8b-instruct"
        elif self.total_ram_gb >= 16:
            return "llama-3.1-8b-instruct"
        elif self.total_ram_gb >= 8:
            return "phi-2"
        else:
            return "tinyllama"
    
    def is_sufficient_for_model(self, model_id: str) -> bool:
        """Check if hardware meets minimum requirements for a model."""
        min_requirements = {
            "llama-3.1-70b-instruct": {"vram": 24, "ram": 32},
            "llama-3.1-13b-instruct": {"vram": 8, "ram": 16},
            "llama-3.1-8b-instruct": {"vram": 6, "ram": 8},
            "deepseek-r1-distill-7b": {"vram": 8, "ram": 12},
            "phi-2": {"vram": 4, "ram": 8},
            "tinyllama": {"vram": 2, "ram": 4},
            "flux.1-dev": {"vram": 16, "ram": 20},
            "sdxl": {"vram": 10, "ram": 16},
            "open-sora-v2": {"vram": 20, "ram": 32},
            "musicgen-large": {"vram": 8, "ram": 12},
        }
        
        req = min_requirements.get(model_id, {"vram": 4, "ram": 8})
        
        if self.has_nvidia_gpu and self.gpu_vram_gb >= req.get("vram", 4):
            return True
        if self.total_ram_gb >= req.get("ram", 8):
            return True
        return False


def detect_hardware() -> HardwareInfo:
    """Detect available hardware capabilities."""
    import platform as platform_module
    
    # CPU info
    cpu_cores = psutil.cpu_count(logical=False) or 1
    cpu_logical = psutil.cpu_count(logical=True) or 1
    ram_bytes = psutil.virtual_memory().total
    available_ram = psutil.virtual_memory().available
    
    total_ram_gb = ram_bytes / (1024**3)
    available_ram_gb = available_ram / (1024**3)
    
    # Platform
    system = platform_module.system().lower()
    if system == "windows":
        detected_platform = "windows"
    elif system == "darwin":
        detected_platform = "darwin"
    else:
        detected_platform = "linux"
    
    # GPU Detection
    has_nvidia_gpu = False
    gpu_name = None
    gpu_vram_gb = 0.0
    gpu_compute = None
    
    if TORCH_AVAILABLE and torch.cuda.is_available():
        has_nvidia_gpu = True
        gpu_name = torch.cuda.get_device_name(0)
        gpu_vram_gb = torch.cuda.get_device_properties(0).total_memory / (1024**3)
        try:
            major, minor = torch.cuda.get_device_capability(0)
            gpu_compute = f"{major}.{minor}"
        except:
            pass
    elif NVIDIA_AVAILABLE:
        try:
            pynvml.nvmlInit()
            device_count = pynvml.nvmlDeviceGetCount()
            if device_count > 0:
                handle = pynvml.nvmlDeviceGetHandleByIndex(0)
                gpu_name = pynvml.nvmlDeviceGetName(handle).decode()
                mem_info = pynvml.nvmlDeviceGetMemoryInfo(handle)
                gpu_vram_gb = mem_info.total / (1024**3)
                has_nvidia_gpu = True
        except Exception as e:
            print(f"NVIDIA detection failed: {e}")
    
    # Apple Metal Performance Shaders
    has_mps = detected_platform == "darwin" and TORCH_AVAILABLE and torch.backends.mps.is_available()
    
    return HardwareInfo(
        cpu_cores=cpu_cores,
        cpu_count_logical=cpu_logical,
        total_ram_gb=total_ram_gb,
        available_ram_gb=available_ram_gb,
        has_nvidia_gpu=has_nvidia_gpu,
        gpu_name=gpu_name,
        gpu_vram_gb=gpu_vram_gb,
        gpu_compute_capability=gpu_compute,
        has_mps=has_mps,
        platform=detected_platform,
    )


if __name__ == "__main__":
    hw = detect_hardware()
    print(f"CPU Cores: {hw.cpu_cores} (logical: {hw.cpu_count_logical})")
    print(f"RAM: {hw.total_ram_gb:.1f} GB (available: {hw.available_ram_gb:.1f} GB)")
    print(f"Platform: {hw.platform}")
    print(f"NVIDIA GPU: {hw.has_nvidia_gpu}")
    if hw.has_nvidia_gpu:
        print(f"  Name: {hw.gpu_name}")
        print(f"  VRAM: {hw.gpu_vram_gb:.1f} GB")
        print(f"  Compute: {hw.gpu_compute_capability}")
    print(f"Apple MPS: {hw.has_mps}")
    print(f"\nRecommended Model: {hw.get_recommended_model()}")
