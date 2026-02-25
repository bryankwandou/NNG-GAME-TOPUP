"""
Local LLM backend using Ollama and Transformers.
Handles text generation, reasoning, and document analysis.
"""

from typing import Optional, AsyncGenerator, List
import asyncio
import json
from abc import ABC, abstractmethod


class LLMBackend(ABC):
    """Abstract base for LLM backends."""
    
    @abstractmethod
    async def generate_text(self, prompt: str, max_tokens: int = 2048, 
                           temperature: float = 0.7, **kwargs) -> AsyncGenerator[str, None]:
        """Generate text from prompt (streaming)."""
        pass
    
    @abstractmethod
    async def generate_text_batch(self, prompts: List[str], **kwargs) -> List[str]:
        """Generate text for multiple prompts (non-streaming)."""
        pass
    
    @abstractmethod
    async def stream_chat(self, messages: List[dict], **kwargs) -> AsyncGenerator[str, None]:
        """Stream chat completions."""
        pass
    
    @abstractmethod
    async def embed(self, text: str) -> List[float]:
        """Generate embeddings."""
        pass


class OllamaBackend(LLMBackend):
    """Ollama-based LLM backend (local)."""
    
    def __init__(self, base_url: str = "http://localhost:11434", model: str = "llama2"):
        self.base_url = base_url
        self.model = model
        self.client = None
        self._init_client()
    
    def _init_client(self):
        """Initialize Ollama client."""
        try:
            import ollama
            self.client = ollama
        except ImportError:
            raise ImportError("Ollama package not installed. Install via: pip install ollama")
    
    async def generate_text(self, prompt: str, max_tokens: int = 2048, 
                           temperature: float = 0.7, **kwargs) -> AsyncGenerator[str, None]:
        """Generate text with streaming via Ollama."""
        if not self.client:
            raise RuntimeError("Ollama client not initialized")
        
        loop = asyncio.get_event_loop()
        
        async def _generate():
            try:
                response = await loop.run_in_executor(
                    None,
                    lambda: self.client.generate(
                        model=self.model,
                        prompt=prompt,
                        stream=True,
                        options={
                            "num_predict": max_tokens,
                            "temperature": temperature,
                        }
                    )
                )
                
                for chunk in response:
                    if "response" in chunk:
                        yield chunk["response"]
                    await asyncio.sleep(0)  # Allow other tasks to run
            except Exception as e:
                yield f"Error: {str(e)}"
        
        async for chunk in _generate():
            yield chunk
    
    async def generate_text_batch(self, prompts: List[str], **kwargs) -> List[str]:
        """Generate text for multiple prompts."""
        results = []
        for prompt in prompts:
            full_response = ""
            async for chunk in self.generate_text(prompt, **kwargs):
                full_response += chunk
            results.append(full_response)
        return results
    
    async def stream_chat(self, messages: List[dict], **kwargs) -> AsyncGenerator[str, None]:
        """Stream chat completions."""
        # Format messages into a single prompt for Ollama
        formatted_prompt = self._format_chat_messages(messages)
        
        async for chunk in self.generate_text(formatted_prompt, **kwargs):
            yield chunk
    
    async def embed(self, text: str) -> List[float]:
        """Generate embeddings via Ollama."""
        loop = asyncio.get_event_loop()
        try:
            response = await loop.run_in_executor(
                None,
                lambda: self.client.embed(
                    model=self.model,
                    input=text
                )
            )
            return response.get("embeddings", [[]])[0]
        except Exception as e:
            raise RuntimeError(f"Embedding failed: {str(e)}")
    
    def _format_chat_messages(self, messages: List[dict]) -> str:
        """Format chat messages into a single prompt."""
        prompt = ""
        for msg in messages:
            role = msg.get("role", "user")
            content = msg.get("content", "")
            prompt += f"{role.capitalize()}: {content}\n"
        prompt += "Assistant: "
        return prompt


class TransformersBackend(LLMBackend):
    """Transformers-based backend (local)."""
    
    def __init__(self, model_name: str = "meta-llama/Llama-2-7b-chat-hf"):
        self.model_name = model_name
        self.model = None
        self.tokenizer = None
        self.device = "cuda" if self._has_cuda() else "cpu"
        self._load_model()
    
    def _has_cuda(self) -> bool:
        """Check if CUDA is available."""
        try:
            import torch
            return torch.cuda.is_available()
        except:
            return False
    
    def _load_model(self):
        """Load model and tokenizer."""
        try:
            from transformers import AutoModelForCausalLM, AutoTokenizer
            import torch
            
            self.tokenizer = AutoTokenizer.from_pretrained(self.model_name)
            self.model = AutoModelForCausalLM.from_pretrained(
                self.model_name,
                device_map="auto",
                torch_dtype=torch.float16 if self._has_cuda() else torch.float32,
                load_in_8bit=self._has_cuda(),
            )
        except Exception as e:
            raise RuntimeError(f"Failed to load model {self.model_name}: {str(e)}")
    
    async def generate_text(self, prompt: str, max_tokens: int = 2048, 
                           temperature: float = 0.7, **kwargs) -> AsyncGenerator[str, None]:
        """Generate text with streaming."""
        if not self.model or not self.tokenizer:
            raise RuntimeError("Model not initialized")
        
        import torch
        from transformers import TextIteratorStreamer
        from threading import Thread
        
        loop = asyncio.get_event_loop()
        
        def _generate():
            inputs = self.tokenizer(prompt, return_tensors="pt").to(self.device)
            streamer = TextIteratorStreamer(self.tokenizer, skip_prompt=True)
            
            generation_kwargs = {
                "input_ids": inputs["input_ids"],
                "streamer": streamer,
                "max_new_tokens": max_tokens,
                "temperature": temperature,
                "top_p": 0.95,
                "do_sample": True,
            }
            
            thread = Thread(target=self.model.generate, kwargs=generation_kwargs)
            thread.start()
            
            tokens = []
            for text in streamer:
                tokens.append(text)
            
            thread.join()
            return tokens
        
        tokens = await loop.run_in_executor(None, _generate)
        for token in tokens:
            yield token
    
    async def generate_text_batch(self, prompts: List[str], **kwargs) -> List[str]:
        """Generate text for multiple prompts."""
        results = []
        for prompt in prompts:
            full_response = ""
            async for chunk in self.generate_text(prompt, **kwargs):
                full_response += chunk
            results.append(full_response)
        return results
    
    async def stream_chat(self, messages: List[dict], **kwargs) -> AsyncGenerator[str, None]:
        """Stream chat completions."""
        formatted_prompt = self._format_chat_messages(messages)
        async for chunk in self.generate_text(formatted_prompt, **kwargs):
            yield chunk
    
    async def embed(self, text: str) -> List[float]:
        """Generate embeddings."""
        import torch
        
        if not self.model or not self.tokenizer:
            raise RuntimeError("Model not initialized")
        
        inputs = self.tokenizer(text, return_tensors="pt", padding=True, truncation=True).to(self.device)
        
        with torch.no_grad():
            outputs = self.model(**inputs, output_hidden_states=True)
            embeddings = outputs.hidden_states[-1].mean(dim=1).cpu().numpy()
        
        return embeddings[0].tolist()
    
    def _format_chat_messages(self, messages: List[dict]) -> str:
        """Format chat messages."""
        prompt = ""
        for msg in messages:
            role = msg.get("role", "user")
            content = msg.get("content", "")
            prompt += f"{role.capitalize()}: {content}\n"
        prompt += "Assistant: "
        return prompt


# Factory function
async def create_llm_backend(model_id: str, backend_type: str = "ollama") -> LLMBackend:
    """Create appropriate LLM backend."""
    if backend_type == "ollama":
        return OllamaBackend(model=model_id)
    elif backend_type == "transformers":
        return TransformersBackend(model_name=model_id)
    else:
        raise ValueError(f"Unknown backend type: {backend_type}")
