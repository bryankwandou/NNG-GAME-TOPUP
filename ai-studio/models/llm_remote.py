"""
Remote API backend for cloud-based LLMs.
Supports OpenAI, Anthropic, Gemini, Groq, etc.
"""

from typing import Optional, AsyncGenerator, List
from abc import ABC, abstractmethod
import httpx
import json


class RemoteAPIBackend(ABC):
    """Abstract base for remote API backends."""
    
    @abstractmethod
    async def generate_text(self, prompt: str, max_tokens: int = 2048, 
                           temperature: float = 0.7, **kwargs) -> AsyncGenerator[str, None]:
        """Generate text from prompt (streaming)."""
        pass
    
    @abstractmethod
    async def stream_chat(self, messages: List[dict], **kwargs) -> AsyncGenerator[str, None]:
        """Stream chat completions."""
        pass


class OpenAIBackend(RemoteAPIBackend):
    """OpenAI API backend (GPT-4, GPT-3.5, etc.)."""
    
    def __init__(self, api_key: str, model: str = "gpt-4-turbo"):
        self.api_key = api_key
        self.model = model
        self.base_url = "https://api.openai.com/v1"
    
    async def generate_text(self, prompt: str, max_tokens: int = 2048, 
                           temperature: float = 0.7, **kwargs) -> AsyncGenerator[str, None]:
        """Generate text via OpenAI."""
        messages = [{"role": "user", "content": prompt}]
        
        async for chunk in self.stream_chat(messages, max_tokens=max_tokens, 
                                            temperature=temperature, **kwargs):
            yield chunk
    
    async def stream_chat(self, messages: List[dict], **kwargs) -> AsyncGenerator[str, None]:
        """Stream chat completions via OpenAI."""
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
        }
        
        payload = {
            "model": self.model,
            "messages": messages,
            "stream": True,
            "max_tokens": kwargs.get("max_tokens", 2048),
            "temperature": kwargs.get("temperature", 0.7),
        }
        
        async with httpx.AsyncClient() as client:
            async with client.stream(
                "POST",
                f"{self.base_url}/chat/completions",
                headers=headers,
                json=payload,
            ) as response:
                async for line in response.aiter_lines():
                    if line.startswith("data: "):
                        data = line[6:]
                        if data == "[DONE]":
                            break
                        try:
                            chunk = json.loads(data)
                            delta = chunk.get("choices", [{}])[0].get("delta", {})
                            content = delta.get("content", "")
                            if content:
                                yield content
                        except json.JSONDecodeError:
                            pass


class AnthropicBackend(RemoteAPIBackend):
    """Anthropic Claude API backend."""
    
    def __init__(self, api_key: str, model: str = "claude-3-opus-20240229"):
        self.api_key = api_key
        self.model = model
        self.base_url = "https://api.anthropic.com/v1"
    
    async def generate_text(self, prompt: str, max_tokens: int = 2048, 
                           temperature: float = 0.7, **kwargs) -> AsyncGenerator[str, None]:
        """Generate text via Anthropic."""
        messages = [{"role": "user", "content": prompt}]
        
        async for chunk in self.stream_chat(messages, max_tokens=max_tokens, 
                                            temperature=temperature, **kwargs):
            yield chunk
    
    async def stream_chat(self, messages: List[dict], **kwargs) -> AsyncGenerator[str, None]:
        """Stream chat completions via Anthropic."""
        headers = {
            "x-api-key": self.api_key,
            "anthropic-version": "2023-06-01",
            "content-type": "application/json",
        }
        
        payload = {
            "model": self.model,
            "max_tokens": kwargs.get("max_tokens", 2048),
            "messages": messages,
            "stream": True,
            "temperature": kwargs.get("temperature", 0.7),
        }
        
        async with httpx.AsyncClient() as client:
            async with client.stream(
                "POST",
                f"{self.base_url}/messages",
                headers=headers,
                json=payload,
            ) as response:
                async for line in response.aiter_lines():
                    if line.startswith("data: "):
                        try:
                            chunk = json.loads(line[6:])
                            if chunk.get("type") == "content_block_delta":
                                delta = chunk.get("delta", {})
                                if delta.get("type") == "text_delta":
                                    yield delta.get("text", "")
                        except json.JSONDecodeError:
                            pass


class GeminiBackend(RemoteAPIBackend):
    """Google Gemini API backend."""
    
    def __init__(self, api_key: str, model: str = "gemini-pro"):
        self.api_key = api_key
        self.model = model
        self.base_url = "https://generativelanguage.googleapis.com/v1beta/models"
    
    async def generate_text(self, prompt: str, max_tokens: int = 2048, 
                           temperature: float = 0.7, **kwargs) -> AsyncGenerator[str, None]:
        """Generate text via Gemini."""
        messages = [{"role": "user", "parts": [{"text": prompt}]}]
        
        async for chunk in self.stream_chat(messages, max_tokens=max_tokens, 
                                            temperature=temperature, **kwargs):
            yield chunk
    
    async def stream_chat(self, messages: List[dict], **kwargs) -> AsyncGenerator[str, None]:
        """Stream chat completions via Gemini."""
        payload = {
            "contents": messages,
            "generationConfig": {
                "maxOutputTokens": kwargs.get("max_tokens", 2048),
                "temperature": kwargs.get("temperature", 0.7),
            },
        }
        
        async with httpx.AsyncClient() as client:
            async with client.stream(
                "POST",
                f"{self.base_url}/{self.model}:streamGenerateContent?key={self.api_key}",
                json=payload,
            ) as response:
                async for line in response.aiter_lines():
                    try:
                        chunk = json.loads(line)
                        if "candidates" in chunk:
                            for candidate in chunk["candidates"]:
                                if "content" in candidate:
                                    for part in candidate["content"].get("parts", []):
                                        if "text" in part:
                                            yield part["text"]
                    except json.JSONDecodeError:
                        pass


class GroqBackend(RemoteAPIBackend):
    """Groq API backend (fast inference)."""
    
    def __init__(self, api_key: str, model: str = "mixtral-8x7b-32768"):
        self.api_key = api_key
        self.model = model
        self.base_url = "https://api.groq.com/openai/v1"
    
    async def generate_text(self, prompt: str, max_tokens: int = 2048, 
                           temperature: float = 0.7, **kwargs) -> AsyncGenerator[str, None]:
        """Generate text via Groq."""
        messages = [{"role": "user", "content": prompt}]
        
        async for chunk in self.stream_chat(messages, max_tokens=max_tokens, 
                                            temperature=temperature, **kwargs):
            yield chunk
    
    async def stream_chat(self, messages: List[dict], **kwargs) -> AsyncGenerator[str, None]:
        """Stream chat completions via Groq."""
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
        }
        
        payload = {
            "model": self.model,
            "messages": messages,
            "stream": True,
            "max_tokens": kwargs.get("max_tokens", 2048),
            "temperature": kwargs.get("temperature", 0.7),
        }
        
        async with httpx.AsyncClient() as client:
            async with client.stream(
                "POST",
                f"{self.base_url}/chat/completions",
                headers=headers,
                json=payload,
            ) as response:
                async for line in response.aiter_lines():
                    if line.startswith("data: "):
                        data = line[6:]
                        if data == "[DONE]":
                            break
                        try:
                            chunk = json.loads(data)
                            delta = chunk.get("choices", [{}])[0].get("delta", {})
                            content = delta.get("content", "")
                            if content:
                                yield content
                        except json.JSONDecodeError:
                            pass


# Factory function
async def create_remote_backend(api_provider: str, api_key: str, model: str) -> RemoteAPIBackend:
    """Create appropriate remote API backend."""
    if api_provider.lower() == "openai":
        return OpenAIBackend(api_key=api_key, model=model)
    elif api_provider.lower() == "anthropic":
        return AnthropicBackend(api_key=api_key, model=model)
    elif api_provider.lower() == "gemini":
        return GeminiBackend(api_key=api_key, model=model)
    elif api_provider.lower() == "groq":
        return GroqBackend(api_key=api_key, model=model)
    else:
        raise ValueError(f"Unknown API provider: {api_provider}")
