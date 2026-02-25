"""
Model Registry - Central model management system.
Defines all available models (local & remote) with capabilities and metadata.
"""

from dataclasses import dataclass, field, asdict
from enum import Enum
from typing import List, Dict, Optional, Any
import json
from pathlib import Path


class CapabilityTag(str, Enum):
    """Available AI capabilities."""
    TEXT_CHAT = "text_chat"
    CODE_GENERATION = "code"
    REASONING = "reasoning"
    IMAGE_GENERATION = "image_gen"
    IMAGE_UNDERSTANDING = "image_understanding"
    VIDEO_GENERATION = "video_gen"
    AUDIO_GENERATION = "audio_gen"
    SPEECH_RECOGNITION = "stt"
    TEXT_TO_SPEECH = "tts"
    DOCUMENT_QA = "doc_qa"
    VISION = "vision"
    MULTIMODAL = "multimodal"
    TRADING_ANALYSIS = "trading"
    CODE_ANALYSIS = "code_analysis"


class BackendType(str, Enum):
    """Types of model backends."""
    LOCAL_LLM = "local_llm"  # Ollama, Transformers
    LOCAL_DIFFUSION = "local_diffusion"  # Diffusers
    LOCAL_VIDEO = "local_video"
    LOCAL_AUDIO = "local_audio"
    LOCAL_SPEECH = "local_speech"
    REMOTE_API = "remote_api"  # OpenAI, Anthropic, etc.


@dataclass
class ModelMetadata:
    """Complete model specification."""
    id: str
    name: str
    description: str
    backend: BackendType
    capabilities: List[CapabilityTag]
    
    # Installation & availability
    installed: bool = False
    offline_available: bool = False
    
    # Hardware requirements
    min_vram_gb: int = 4
    recommended_vram_gb: int = 8
    min_ram_gb: int = 8
    
    # Model specifics
    model_url: Optional[str] = None
    model_path: Optional[str] = None  # Local path if installed
    ollama_name: Optional[str] = None  # For Ollama models
    api_provider: Optional[str] = None  # e.g. "openai", "anthropic"
    context_window: int = 4096
    max_tokens: int = 2048
    
    # Performance metrics (optional)
    inference_speed_tflops: Optional[float] = None
    quantization: Optional[str] = None  # e.g. "q4", "q8", "fp16"
    
    # Extended config
    config: Dict[str, Any] = field(default_factory=dict)


class ModelRegistry:
    """Central registry for all available models."""
    
    def __init__(self):
        self.models: Dict[str, ModelMetadata] = {}
        self._init_builtin_models()
    
    def _init_builtin_models(self):
        """Initialize built-in model definitions."""
        
        # ========== TEXT LLMs (Local) ==========
        self.register(ModelMetadata(
            id="llama-3.1-8b-instruct",
            name="Llama 3.1 8B Instruct",
            description="General-purpose 8B instruction-tuned model. Good balance of quality and speed.",
            backend=BackendType.LOCAL_LLM,
            capabilities=[CapabilityTag.TEXT_CHAT, CapabilityTag.CODE_GENERATION, CapabilityTag.REASONING],
            offline_available=True,
            min_vram_gb=6,
            recommended_vram_gb=8,
            min_ram_gb=8,
            ollama_name="llama2:7b-chat",
            context_window=8192,
            max_tokens=2048,
        ))
        
        self.register(ModelMetadata(
            id="deepseek-r1-distill-7b",
            name="DeepSeek-R1 Distill 7B",
            description="Strong reasoning capabilities. Great for analysis, logic, and problem-solving.",
            backend=BackendType.LOCAL_LLM,
            capabilities=[CapabilityTag.TEXT_CHAT, CapabilityTag.CODE_GENERATION, CapabilityTag.REASONING, CapabilityTag.TRADING_ANALYSIS],
            offline_available=True,
            min_vram_gb=8,
            recommended_vram_gb=10,
            min_ram_gb=12,
            context_window=32768,
            max_tokens=4096,
        ))
        
        self.register(ModelMetadata(
            id="phi-2",
            name="Phi 2",
            description="Lightweight 2.7B model. Good for low-resource deployments.",
            backend=BackendType.LOCAL_LLM,
            capabilities=[CapabilityTag.TEXT_CHAT, CapabilityTag.CODE_GENERATION],
            offline_available=True,
            min_vram_gb=2,
            recommended_vram_gb=4,
            min_ram_gb=6,
            context_window=4096,
            max_tokens=1024,
        ))
        
        self.register(ModelMetadata(
            id="tinyllama",
            name="TinyLLaMA",
            description="Ultra-lightweight 1.1B model for CPU-only systems.",
            backend=BackendType.LOCAL_LLM,
            capabilities=[CapabilityTag.TEXT_CHAT],
            offline_available=True,
            min_vram_gb=0,
            recommended_vram_gb=1,
            min_ram_gb=4,
            context_window=2048,
            max_tokens=512,
        ))
        
        # ========== VISION/MULTIMODAL (Local) ==========
        self.register(ModelMetadata(
            id="llava-7b",
            name="LLaVA 7B Vision",
            description="Vision-capable model for image understanding and document analysis.",
            backend=BackendType.LOCAL_LLM,
            capabilities=[CapabilityTag.IMAGE_UNDERSTANDING, CapabilityTag.DOCUMENT_QA, CapabilityTag.VISION],
            offline_available=True,
            min_vram_gb=8,
            recommended_vram_gb=10,
            min_ram_gb=12,
        ))
        
        # ========== IMAGE GENERATION (Local) ==========
        self.register(ModelMetadata(
            id="flux.1-dev",
            name="FLUX.1 Dev",
            description="State-of-the-art text-to-image generation. High quality but slower.",
            backend=BackendType.LOCAL_DIFFUSION,
            capabilities=[CapabilityTag.IMAGE_GENERATION],
            offline_available=True,
            min_vram_gb=14,
            recommended_vram_gb=16,
            min_ram_gb=16,
            context_window=77,
            max_tokens=512,
        ))
        
        self.register(ModelMetadata(
            id="sdxl",
            name="Stable Diffusion XL",
            description="Popular SDXL image generation model.",
            backend=BackendType.LOCAL_DIFFUSION,
            capabilities=[CapabilityTag.IMAGE_GENERATION],
            offline_available=True,
            min_vram_gb=10,
            recommended_vram_gb=12,
            min_ram_gb=12,
        ))
        
        self.register(ModelMetadata(
            id="sd-turbo",
            name="SD Turbo",
            description="Fast Stable Diffusion variant for quick iterations.",
            backend=BackendType.LOCAL_DIFFUSION,
            capabilities=[CapabilityTag.IMAGE_GENERATION],
            offline_available=True,
            min_vram_gb=8,
            recommended_vram_gb=10,
            min_ram_gb=10,
        ))
        
        # ========== VIDEO GENERATION (Local) ==========
        self.register(ModelMetadata(
            id="open-sora-v2",
            name="Open-Sora v2",
            description="Text-to-video generation for short clips (720p, 2-4 sec).",
            backend=BackendType.LOCAL_VIDEO,
            capabilities=[CapabilityTag.VIDEO_GENERATION],
            offline_available=True,
            min_vram_gb=20,
            recommended_vram_gb=24,
            min_ram_gb=32,
        ))
        
        # ========== AUDIO GENERATION (Local) ==========
        self.register(ModelMetadata(
            id="musicgen-large",
            name="MusicGen Large",
            description="Music generation from text prompts.",
            backend=BackendType.LOCAL_AUDIO,
            capabilities=[CapabilityTag.AUDIO_GENERATION],
            offline_available=True,
            min_vram_gb=8,
            recommended_vram_gb=10,
            min_ram_gb=12,
        ))
        
        # ========== SPEECH (Local) ==========
        self.register(ModelMetadata(
            id="whisper-base",
            name="Whisper Base",
            description="Speech-to-text in 99+ languages.",
            backend=BackendType.LOCAL_SPEECH,
            capabilities=[CapabilityTag.SPEECH_RECOGNITION],
            offline_available=True,
            min_vram_gb=2,
            recommended_vram_gb=4,
            min_ram_gb=6,
        ))
        
        self.register(ModelMetadata(
            id="xtts-v2",
            name="XTTS v2",
            description="Text-to-speech with voice cloning.",
            backend=BackendType.LOCAL_SPEECH,
            capabilities=[CapabilityTag.TEXT_TO_SPEECH],
            offline_available=True,
            min_vram_gb=6,
            recommended_vram_gb=8,
            min_ram_gb=10,
        ))
        
        # ========== REMOTE / API MODELS ==========
        self.register(ModelMetadata(
            id="gpt-4-turbo",
            name="GPT-4 Turbo",
            description="OpenAI's latest powerful model. Requires API key.",
            backend=BackendType.REMOTE_API,
            capabilities=[CapabilityTag.TEXT_CHAT, CapabilityTag.CODE_GENERATION, CapabilityTag.REASONING, CapabilityTag.VISION],
            offline_available=False,
            api_provider="openai",
            context_window=128000,
            max_tokens=4096,
        ))
        
        self.register(ModelMetadata(
            id="gpt-4o",
            name="GPT-4o",
            description="OpenAI multimodal model. Requires API key.",
            backend=BackendType.REMOTE_API,
            capabilities=[CapabilityTag.TEXT_CHAT, CapabilityTag.IMAGE_GENERATION, CapabilityTag.VISION, CapabilityTag.MULTIMODAL],
            offline_available=False,
            api_provider="openai",
            context_window=128000,
            max_tokens=4096,
        ))
        
        self.register(ModelMetadata(
            id="claude-3-opus",
            name="Claude 3 Opus",
            description="Anthropic's most capable model. Requires API key.",
            backend=BackendType.REMOTE_API,
            capabilities=[CapabilityTag.TEXT_CHAT, CapabilityTag.CODE_GENERATION, CapabilityTag.REASONING, CapabilityTag.VISION],
            offline_available=False,
            api_provider="anthropic",
            context_window=200000,
            max_tokens=4096,
        ))
        
        self.register(ModelMetadata(
            id="gemini-pro",
            name="Gemini Pro",
            description="Google's Gemini model. Requires API key.",
            backend=BackendType.REMOTE_API,
            capabilities=[CapabilityTag.TEXT_CHAT, CapabilityTag.CODE_GENERATION, CapabilityTag.VISION],
            offline_available=False,
            api_provider="gemini",
            context_window=32000,
            max_tokens=2048,
        ))
        
        self.register(ModelMetadata(
            id="groq-mixtral",
            name="Mixtral 8x7B (via Groq)",
            description="Fast inference via Groq API.",
            backend=BackendType.REMOTE_API,
            capabilities=[CapabilityTag.TEXT_CHAT, CapabilityTag.CODE_GENERATION, CapabilityTag.REASONING],
            offline_available=False,
            api_provider="groq",
            context_window=32000,
            max_tokens=4096,
        ))
    
    def register(self, model: ModelMetadata):
        """Register a model in the registry."""
        self.models[model.id] = model
    
    def get(self, model_id: str) -> Optional[ModelMetadata]:
        """Get model by ID."""
        return self.models.get(model_id)
    
    def list_all(self) -> List[ModelMetadata]:
        """List all models."""
        return list(self.models.values())
    
    def list_by_capability(self, capability: CapabilityTag) -> List[ModelMetadata]:
        """Find models with a specific capability."""
        return [m for m in self.models.values() if capability in m.capabilities]
    
    def list_offline(self) -> List[ModelMetadata]:
        """List all offline-available models."""
        return [m for m in self.models.values() if m.offline_available]
    
    def list_installed(self) -> List[ModelMetadata]:
        """List all installed models."""
        return [m for m in self.models.values() if m.installed]
    
    def filter_by_hardware(self, vram_gb: float, ram_gb: float) -> List[ModelMetadata]:
        """Filter models that fit hardware constraints."""
        return [m for m in self.models.values() if m.min_vram_gb <= vram_gb and m.min_ram_gb <= ram_gb]
    
    def find_best_for_capability(self, capability: CapabilityTag, 
                                 vram_gb: float, ram_gb: float,
                                 offline_only: bool = False) -> Optional[ModelMetadata]:
        """Find best model for a capability given hardware constraints."""
        candidates = self.list_by_capability(capability)
        
        if offline_only:
            candidates = [m for m in candidates if m.offline_available]
        
        candidates = [m for m in candidates if m.min_vram_gb <= vram_gb and m.min_ram_gb <= ram_gb]
        
        if not candidates:
            return None
        
        # Sort by recommended VRAM (prefer models that fit comfortably)
        return sorted(candidates, key=lambda m: m.recommended_vram_gb)[0]
    
    def to_dict(self) -> Dict[str, Dict]:
        """Export registry as dictionary."""
        return {model_id: asdict(model) for model_id, model in self.models.items()}
    
    def to_json(self, path: Optional[str] = None) -> str:
        """Export registry as JSON."""
        data = self.to_dict()
        # Convert Enum values to strings for JSON serialization
        for model_id, model_dict in data.items():
            if "backend" in model_dict:
                model_dict["backend"] = model_dict["backend"].value
            if "capabilities" in model_dict:
                model_dict["capabilities"] = [cap.value for cap in model_dict["capabilities"]]
        
        json_str = json.dumps(data, indent=2, default=str)
        
        if path:
            Path(path).write_text(json_str)
        
        return json_str


# Global registry instance
registry = ModelRegistry()
