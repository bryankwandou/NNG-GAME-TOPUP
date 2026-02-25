"""
Configuration management for AI Studio.
Loads settings from environment variables and config files.
"""

from pydantic_settings import BaseSettings
from typing import Optional, List
from pathlib import Path


class Settings(BaseSettings):
    """Application settings."""
    
    # Server
    ai_studio_host: str = "0.0.0.0"
    ai_studio_port: int = 8001
    ai_studio_debug: bool = False
    
    # Model paths
    models_path: str = "./models"
    ollama_base_url: str = "http://localhost:11434"
    
    # API Keys
    openai_api_key: Optional[str] = None
    anthropic_api_key: Optional[str] = None
    gemini_api_key: Optional[str] = None
    groq_api_key: Optional[str] = None
    
    # Database
    database_url: str = "postgresql://topupuser:topuppass123@localhost:5432/topupdb"
    
    # Hardware
    gpu_available: bool = True
    cuda_device: int = 0
    max_vram_gb: int = 8
    
    # Features
    enable_offline_mode: bool = True
    enable_online_mode: bool = True
    enable_video_gen: bool = True
    enable_music_gen: bool = True
    enable_trading_agent: bool = False
    
    # Logging
    log_level: str = "info"
    
    class Config:
        env_file = ".env"
        case_sensitive = False
    
    def get_models_path(self) -> Path:
        """Get models directory path."""
        return Path(self.models_path).expanduser().absolute()


settings = Settings()
