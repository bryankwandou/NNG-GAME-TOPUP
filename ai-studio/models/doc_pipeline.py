"""
Document Processing Pipeline - Extract, analyze, and answer questions from documents.
Supports PDF, DOCX, PPT, TXT with OCR fallback for images.
"""

from pathlib import Path
from typing import Optional, Dict, List, Any
import asyncio
from dataclasses import dataclass

try:
    import PyPDF2
    import docx
    from pptx import Presentation
    import pytesseract
    from PIL import Image
    DOCUMENT_LIBS_AVAILABLE = True
except ImportError:
    DOCUMENT_LIBS_AVAILABLE = False

from utils.logging import logger


@dataclass
class DocumentContent:
    """Extracted document content."""
    text: str
    metadata: Dict[str, Any]
    pages: Optional[List[str]] = None  # Per-page text
    images: Optional[List[str]] = None  # Extracted image paths


class DocumentProcessor:
    """Process various document formats."""
    
    def __init__(self):
        if not DOCUMENT_LIBS_AVAILABLE:
            logger.warning("Document processing libraries not available. Install: PyPDF2, python-docx, python-pptx, pytesseract")
    
    async def process_document(self, file_path: Path) -> DocumentContent:
        """Extract content from document based on type."""
        suffix = file_path.suffix.lower()
        
        if suffix == '.pdf':
            return await self._process_pdf(file_path)
        elif suffix == '.docx':
            return await self._process_docx(file_path)
        elif suffix in ['.ppt', '.pptx']:
            return await self._process_pptx(file_path)
        elif suffix == '.txt':
            return await self._process_txt(file_path)
        elif suffix in ['.png', '.jpg', '.jpeg']:
            return await self._process_image_ocr(file_path)
        else:
            raise ValueError(f"Unsupported file type: {suffix}")
    
    async def _process_pdf(self, file_path: Path) -> DocumentContent:
        """Extract text from PDF."""
        loop = asyncio.get_event_loop()
        return await loop.run_in_executor(None, self._extract_pdf_sync, file_path)
    
    def _extract_pdf_sync(self, file_path: Path) -> DocumentContent:
        """Synchronous PDF extraction."""
        pages_text = []
        metadata = {}
        
        with open(file_path, 'rb') as f:
            reader = PyPDF2.PdfReader(f)
            metadata = {
                'num_pages': len(reader.pages),
                'title': reader.metadata.get('/Title', ''),
                'author': reader.metadata.get('/Author', ''),
            }
            
            for page in reader.pages:
                text = page.extract_text()
                pages_text.append(text)
        
        full_text = "\n\n--- Page Break ---\n\n".join(pages_text)
        
        return DocumentContent(
            text=full_text,
            metadata=metadata,
            pages=pages_text
        )
    
    async def _process_docx(self, file_path: Path) -> DocumentContent:
        """Extract text from DOCX."""
        loop = asyncio.get_event_loop()
        return await loop.run_in_executor(None, self._extract_docx_sync, file_path)
    
    def _extract_docx_sync(self, file_path: Path) -> DocumentContent:
        """Synchronous DOCX extraction."""
        doc = docx.Document(file_path)
        
        paragraphs = [p.text for p in doc.paragraphs if p.text.strip()]
        full_text = "\n\n".join(paragraphs)
        
        # Extract tables
        tables_text = []
        for table in doc.tables:
            for row in table.rows:
                row_text = " | ".join(cell.text for cell in row.cells)
                tables_text.append(row_text)
        
        if tables_text:
            full_text += "\n\n=== Tables ===\n\n" + "\n".join(tables_text)
        
        metadata = {
            'paragraphs': len(paragraphs),
            'tables': len(doc.tables),
        }
        
        return DocumentContent(
            text=full_text,
            metadata=metadata
        )
    
    async def _process_pptx(self, file_path: Path) -> DocumentContent:
        """Extract text from PowerPoint."""
        loop = asyncio.get_event_loop()
        return await loop.run_in_executor(None, self._extract_pptx_sync, file_path)
    
    def _extract_pptx_sync(self, file_path: Path) -> DocumentContent:
        """Synchronous PPTX extraction."""
        prs = Presentation(file_path)
        slides_text = []
        
        for i, slide in enumerate(prs.slides, 1):
            slide_text = f"=== Slide {i} ===\n"
            for shape in slide.shapes:
                if hasattr(shape, "text"):
                    slide_text += shape.text + "\n"
            slides_text.append(slide_text)
        
        full_text = "\n\n".join(slides_text)
        
        metadata = {
            'num_slides': len(prs.slides),
            'slide_width': prs.slide_width,
            'slide_height': prs.slide_height,
        }
        
        return DocumentContent(
            text=full_text,
            metadata=metadata,
            pages=slides_text
        )
    
    async def _process_txt(self, file_path: Path) -> DocumentContent:
        """Read plain text file."""
        text = file_path.read_text(encoding='utf-8', errors='ignore')
        
        return DocumentContent(
            text=text,
            metadata={'encoding': 'utf-8'}
        )
    
    async def _process_image_ocr(self, file_path: Path) -> DocumentContent:
        """Extract text from image using OCR."""
        loop = asyncio.get_event_loop()
        return await loop.run_in_executor(None, self._extract_image_sync, file_path)
    
    def _extract_image_sync(self, file_path: Path) -> DocumentContent:
        """Synchronous OCR extraction."""
        try:
            image = Image.open(file_path)
            text = pytesseract.image_to_string(image)
            
            metadata = {
                'width': image.width,
                'height': image.height,
                'format': image.format,
            }
            
            return DocumentContent(
                text=text,
                metadata=metadata
            )
        except Exception as e:
            logger.error(f"OCR failed: {e}")
            return DocumentContent(
                text="",
                metadata={'error': str(e)}
            )


class DocumentQAPipeline:
    """Question-answering pipeline for documents."""
    
    def __init__(self, model_manager):
        self.processor = DocumentProcessor()
        self.model_manager = model_manager
        self.document_cache: Dict[str, DocumentContent] = {}
    
    async def analyze_document(
        self,
        file_path: Path,
        model_id: str,
        operation: str = "summarize"
    ) -> str:
        """Analyze document with specified operation."""
        
        # Extract document content
        doc_id = str(file_path)
        if doc_id not in self.document_cache:
            logger.info(f"Processing document: {file_path}")
            self.document_cache[doc_id] = await self.processor.process_document(file_path)
        
        content = self.document_cache[doc_id]
        
        # Build prompt based on operation
        if operation == "summarize":
            prompt = f"""Summarize the following document concisely:

{content.text[:8000]}  # Truncate for context limit

Provide:
1. Main topic/purpose
2. Key points (3-5 bullets)
3. Conclusions or recommendations

Summary:"""
        
        elif operation == "extract_entities":
            prompt = f"""Extract key entities from this document:

{content.text[:8000]}

Extract:
- People/Organizations
- Dates/Events
- Numbers/Statistics
- Technical terms

Entities:"""
        
        elif operation == "outline":
            prompt = f"""Create a structured outline of this document:

{content.text[:8000]}

Outline:"""
        
        else:
            prompt = f"""Analyze this document:

{content.text[:8000]}

Analysis:"""
        
        # Generate response using LLM
        response = await self.model_manager.generate_text(
            model_id=model_id,
            prompt=prompt,
            temperature=0.3,
            max_tokens=1024
        )
        
        return response
    
    async def answer_question(
        self,
        file_path: Path,
        question: str,
        model_id: str
    ) -> str:
        """Answer specific question about document."""
        
        # Get cached document content
        doc_id = str(file_path)
        if doc_id not in self.document_cache:
            self.document_cache[doc_id] = await self.processor.process_document(file_path)
        
        content = self.document_cache[doc_id]
        
        # Build RAG-style prompt
        prompt = f"""Based on the following document, answer the question:

Document:
{content.text[:8000]}

Question: {question}

Answer (be specific and cite relevant parts):"""
        
        response = await self.model_manager.generate_text(
            model_id=model_id,
            prompt=prompt,
            temperature=0.2,
            max_tokens=512
        )
        
        return response
