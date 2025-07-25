# Complete AI Models & API Documentation

## Table of Contents

- [OpenAI Models](#openai-models)
- [Google AI Models](#google-ai-models)
- [Anthropic Claude Models](#anthropic-claude-models)
- [xAI Grok Models](#xai-grok-models)
- [Groq Models](#groq-models)
- [Perplexity AI Models](#perplexity-ai-models)
- [Moonshot AI Models](#moonshot-ai-models)
- [Qwen Models](#qwen-models)

---

## OpenAI Models

### GPT-4o
- **Model Code**: `gpt-4o`
- **Last Updated**: October 2023 knowledge cutoff
- **Description**: OpenAI's flagship multimodal model that accepts text, audio, image, and video inputs, and can output text, audio, and images. Best choice for advanced tool use, vision, and multimodal workflows.
- **Inputs**: text, audio, image, video
- **Outputs**: text, audio, image
- **Input Token Limit**: 128,000 tokens
- **Output Token Limit**: 16,384 tokens
- **Key Features**: Multimodal capabilities, Advanced tool use, Vision processing, Real-time audio processing, Function calling, Structured outputs
- **Model Card**: https://platform.openai.com/docs/models/gpt-4o

### GPT-4o mini
- **Model Code**: `gpt-4o-mini`
- **Last Updated**: October 2023 knowledge cutoff
- **Description**: Cost-efficient small multimodal model with strong performance on text and image tasks. Video and audio capabilities coming soon.
- **Inputs**: text, image
- **Outputs**: text
- **Input Token Limit**: 128,000 tokens
- **Output Token Limit**: 16,384 tokens
- **Key Features**: Cost-efficient, Text and image processing, Video and audio capabilities coming soon, MMLU: 82.0%, MGSM: 87.0%, HumanEval: 87.2%, MMMU: 59.4%, Function calling, Structured outputs
- **Model Card**: https://platform.openai.com/docs/models/gpt-4o-mini

### o1
- **Model Code**: `o1`
- **Last Updated**: October 2023 knowledge cutoff
- **Description**: Advanced reasoning model with chain-of-thought capabilities, designed for complex problem-solving, strategy, coding, and analytical tasks.
- **Inputs**: text
- **Outputs**: text
- **Input Token Limit**: 128,000 tokens
- **Output Token Limit**: 32,768 tokens
- **Key Features**: Chain-of-thought reasoning, Complex problem solving, Strategy ideation, Advanced coding capabilities, Mathematical reasoning, No image input support
- **Model Card**: https://platform.openai.com/docs/models/o1

### o1-preview
- **Model Code**: `o1-preview`
- **Last Updated**: October 2023 knowledge cutoff
- **Description**: Limited-access early release of the o1 reasoning model, reserved for original preview access holders.
- **Inputs**: text
- **Outputs**: text
- **Input Token Limit**: 128,000 tokens
- **Output Token Limit**: 32,768 tokens
- **Key Features**: Single reasoning mode, Limited access, Advanced reasoning capabilities, No developer messages support, No structured outputs
- **Model Card**: https://platform.openai.com/docs/models/o1-preview

### o1-mini
- **Model Code**: `o1-mini`
- **Last Updated**: October 2023 knowledge cutoff
- **Description**: Cost-efficient reasoning model that matches or exceeds o1-preview on STEM benchmarks while being significantly cheaper and faster.
- **Inputs**: text
- **Outputs**: text
- **Input Token Limit**: 128,000 tokens
- **Output Token Limit**: 65,536 tokens
- **Key Features**: Three reasoning-effort settings (low, medium, high), Structured outputs support, Developer messages support, Streaming support, 80% lower cost than o1-preview, Faster processing, Strong STEM performance
- **Model Card**: https://platform.openai.com/docs/models/o1-mini

### o3-mini
- **Model Code**: `o3-mini`
- **Last Updated**: Recent release
- **Description**: Latest reasoning model optimized for STEM reasoning (science, math, coding) with improved accuracy and performance over o1-mini.
- **Inputs**: text
- **Outputs**: text
- **Input Token Limit**: 200,000 tokens
- **Output Token Limit**: 100,000 tokens
- **Key Features**: Three reasoning-effort options, Structured outputs support, Developer messages support, Streaming support, Function calling, STEM optimization, 39% fewer major errors vs o1-mini, 24% lower latency, Triple ChatGPT rate limits
- **Model Card**: https://platform.openai.com/docs/models/o3-mini

### DALL·E 3
- **Model Code**: `dall-e-3`
- **Last Updated**: Current
- **Description**: Advanced image generation model that creates entirely new images from text prompts with built-in safety moderation.
- **Inputs**: text prompts
- **Outputs**: images
- **Key Features**: Text-to-image generation, Built-in moderation filters, Multiple output formats (PNG, JPG), Multiple resolutions (256×256, 512×512, 1024×1024), Automatic prompt rewriting for safety and detail, No edit or variation endpoints
- **Model Card**: https://platform.openai.com/docs/models/dall-e-3

### Whisper
- **Model Code**: `whisper-1`
- **Description**: Speech-to-text model supporting 50+ languages and dialects with improved accuracy for low-quality audio and accents.
- **Inputs**: audio files
- **Outputs**: transcribed text
- **Key Features**: 50+ languages and dialects support, Improved low-quality audio handling, Overlapping speech recognition, Accent handling, Language identification, Timestamped word-level alignments
- **Model Card**: https://platform.openai.com/docs/models/whisper-1

### TTS (Text-to-Speech) Speed
- **Model Code**: `tts-1`
- **Last Updated**: Current
- **Description**: Speed-optimized text-to-speech model designed for real-time applications with sub-200ms startup in streaming mode.
- **Inputs**: text
- **Outputs**: audio
- **Key Features**: Six preset voices (Alloy, Echo, Fable, Onyx, Nova, Shimmer), Multiple output formats (MP3, Opus, AAC, FLAC), Real-time streaming support, Sub-200ms startup latency, Optimized for speed
- **Model Card**: https://platform.openai.com/docs/models/tts-1

### TTS (Text-to-Speech) HD
- **Model Code**: `tts-1-hd`
- **Last Updated**: Current
- **Description**: Quality-optimized text-to-speech model designed for naturalness with higher audio quality than the speed-optimized variant.
- **Inputs**: text
- **Outputs**: audio
- **Key Features**: Six preset voices (Alloy, Echo, Fable, Onyx, Nova, Shimmer), Multiple output formats (MP3, Opus, AAC, FLAC), Real-time streaming support, ~500ms startup latency, Optimized for quality and naturalness
- **Model Card**: https://platform.openai.com/docs/models/tts-1-hd

### Text Embedding 3 Small
- **Model Code**: `text-embedding-3-small`
- **Last Updated**: September 2021 knowledge cutoff
- **Description**: Cost-efficient embedding model that maps text into numerical vectors for semantic search, clustering, and RAG applications.
- **Inputs**: text
- **Outputs**: embeddings
- **Input Token Limit**: 8,191 tokens
- **Output**: 1,536 dimensions
- **Key Features**: 1,536 dimensions, 5× cheaper than ada-002, Improved multilingual performance
- **Model Card**: https://platform.openai.com/docs/models/text-embedding-3-small

---

## Google AI Models

### API Information
- **Base URL**: `https://generativelanguage.googleapis.com`
- **Authentication**: API Key (get from [Google AI Studio](https://aistudio.google.com/app/apikey))
- **SDK**: Google AI Python SDK (`google-generativeai`), Node.js SDK (`@google/generative-ai`)
- **Documentation**: https://ai.google.dev/gemini-api/docs
- **Migration Guide**: https://ai.google.dev/gemini-api/docs/migrate
- **Free Tier**: 15 requests per minute, 1 million tokens per minute, 1,500 requests per day
- **Paid Tier**: Higher rate limits available with billing account

### Rate Limits (Free Tier)
- **Gemini 1.5 Pro**: 2 RPM (requests per minute)
- **Gemini 1.5 Flash**: 15 RPM
- **Gemini 1.0 Pro**: 15 RPM
- **Text Embedding**: 100 RPM

### Gemini 1.5 Pro
- **Model Code**: `gemini-1.5-pro`
- **Last Updated**: February 2024
- **Description**: Most capable multimodal model with long context understanding and advanced reasoning
- **Inputs**: Text, Images, Audio, Video, Documents, PDFs
- **Outputs**: Text
- **Input Token Limit**: 2,000,000 tokens
- **Output Token Limit**: 8,192 tokens
- **Key Features**: Long context window, multimodal understanding, code generation, reasoning, analysis
- **Model Card**: https://ai.google.dev/gemini-api/docs/models

### Gemini 1.5 Flash
- **Model Code**: `gemini-1.5-flash`
- **Last Updated**: May 2024
- **Description**: Fast and efficient multimodal model optimized for speed and cost-effectiveness
- **Inputs**: Text, Images, Audio, Video, Documents
- **Outputs**: Text
- **Input Token Limit**: 1,000,000 tokens
- **Output Token Limit**: 8,192 tokens
- **Key Features**: Fast inference, cost-effective, multimodal, good for high-volume applications
- **Model Card**: https://ai.google.dev/gemini-api/docs/models

### Gemini 1.0 Pro
- **Model Code**: `gemini-1.0-pro`
- **Last Updated**: December 2023
- **Description**: First generation production model for text and reasoning tasks
- **Inputs**: Text
- **Outputs**: Text
- **Input Token Limit**: 30,720 tokens
- **Output Token Limit**: 2,048 tokens
- **Key Features**: Text understanding, reasoning, conversation, code generation
- **Model Card**: https://ai.google.dev/gemini-api/docs/models

### Gemini 1.5 Flash-8B
- **Model Code**: `gemini-1.5-flash-8b`
- **Last Updated**: October 2024
- **Description**: Smaller, faster variant of Gemini 1.5 Flash with high intelligence and multimodal reasoning
- **Inputs**: Text, Images, Audio, Video
- **Outputs**: Text
- **Input Token Limit**: 1,000,000 tokens
- **Output Token Limit**: 8,192 tokens
- **Key Features**: Ultra-fast inference, cost-effective, high quality for smaller model, multimodal
- **Model Card**: https://ai.google.dev/gemini-api/docs/models

### Gemini 1.0 Pro Vision
- **Model Code**: `gemini-1.0-pro-vision`
- **Last Updated**: December 2023
- **Description**: First generation multimodal model that understands text and images
- **Inputs**: Text, Images
- **Outputs**: Text
- **Input Token Limit**: 12,288 tokens
- **Output Token Limit**: 4,096 tokens
- **Key Features**: Text and image understanding, visual reasoning, image description
- **Model Card**: https://ai.google.dev/gemini-api/docs/models

### Text Embedding 004
- **Model Code**: `text-embedding-004`
- **Last Updated**: September 2024
- **Description**: Latest text embedding model for creating vector representations
- **Inputs**: Text
- **Outputs**: 768-dimensional embeddings
- **Key Features**: High-quality embeddings, improved performance, multilingual support
- **Model Card**: https://ai.google.dev/gemini-api/docs/models

### AQA (Attributed Question Answering)
- **Model Code**: `aqa`
- **Last Updated**: September 2024
- **Description**: Specialized model for answering questions with citations and attributions
- **Inputs**: Questions and context documents
- **Outputs**: Answers with source attributions
- **Key Features**: Citation generation, fact checking, source attribution, grounded responses
- **Model Card**: https://ai.google.dev/gemini-api/docs/models

---

## Anthropic Claude Models

### Claude Opus 4
- **Model Code**: `claude-opus-4-20250514`
- **Last Updated**: Mar 2025
- **Description**: Our most capable model. Price: $15 / MTok (Input), $75 / MTok (Output).
- **Inputs**: Text, Image
- **Outputs**: Text
- **Input Token Limit**: 200,000 tokens
- **Output Token Limit**: 32,000 tokens
- **Key Features**: Superior reasoning, Vision, Extended thinking
- **Model Card**: Contact Anthropic for details

### Claude Sonnet 4
- **Model Code**: `claude-sonnet-4-20250514`
- **Last Updated**: Mar 2025
- **Description**: High-performance model with exceptional reasoning. Price: $3 / MTok (Input), $15 / MTok (Output).
- **Inputs**: Text, Image
- **Outputs**: Text
- **Input Token Limit**: 200,000 tokens
- **Output Token Limit**: 64,000 tokens
- **Key Features**: High intelligence, Balanced performance, Vision
- **Model Card**: Contact Anthropic for details

### Claude Sonnet 3.7
- **Model Code**: `claude-3-7-sonnet-20250219`
- **Last Updated**: Nov 2024
- **Description**: High-performance model with toggleable extended thinking. Price: $3 / MTok (Input), $15 / MTok (Output).
- **Inputs**: Text, Image
- **Outputs**: Text
- **Input Token Limit**: 200,000 tokens
- **Output Token Limit**: 64,000 tokens
- **Key Features**: High intelligence, Extended thinking, Vision
- **Model Card**: Contact Anthropic for details

### Claude Sonnet 3.5
- **Model Code**: `claude-3-5-sonnet-20241022`
- **Last Updated**: Apr 2024
- **Description**: Our previous intelligent model. Price: $3 / MTok (Input), $15 / MTok (Output).
- **Inputs**: Text, Image
- **Outputs**: Text
- **Input Token Limit**: 200,000 tokens
- **Output Token Limit**: 8,192 tokens
- **Key Features**: High intelligence and capability, Vision
- **Model Card**: Contact Anthropic for details

### Claude Haiku 3.5
- **Model Code**: `claude-3-5-haiku-20241022`
- **Last Updated**: July 2024
- **Description**: Our fastest model for intelligence at blazing speeds. Price: $0.80 / MTok (Input), $4 / MTok (Output).
- **Inputs**: Text, Image
- **Outputs**: Text
- **Input Token Limit**: 200,000 tokens
- **Output Token Limit**: 8,192 tokens
- **Key Features**: Fastest model, Vision, Priority Tier access
- **Model Card**: Contact Anthropic for details

---

## xAI Grok Models

### Grok 4
- **Model Code**: `grok-4-latest`
- **Last Updated**: July 2025
- **Description**: Language model. Price: $3.00 - $15.00 per million tokens.
- **Inputs**: Text, Image
- **Outputs**: Text
- **Input Token Limit**: 256,000 tokens
- **Output Token Limit**: 8,192 tokens
- **Key Features**: Function calling, Structured outputs
- **Model Card**: https://docs.x.ai/docs/models/grok-4

### Grok 3
- **Model Code**: `grok-3`
- **Last Updated**: Feb 2025
- **Description**: Language model. Price: $3.00 - $15.00 per million tokens.
- **Inputs**: Text, Image
- **Outputs**: Text
- **Input Token Limit**: 131,072 tokens
- **Output Token Limit**: 8,192 tokens
- **Key Features**: Function calling, Structured outputs
- **Model Card**: https://docs.x.ai/docs/models/grok-3

### Grok 3 mini
- **Model Code**: `grok-3-mini`
- **Last Updated**: Feb 2025
- **Description**: Language model. Price: $0.30 - $0.50 per million tokens.
- **Inputs**: Text, Image
- **Outputs**: Text
- **Input Token Limit**: 131,072 tokens
- **Output Token Limit**: 8,192 tokens
- **Key Features**: Function calling, Structured outputs
- **Model Card**: https://docs.x.ai/docs/models/grok-3-mini

### Grok 3 fast
- **Model Code**: `grok-3-fast`
- **Last Updated**: Feb 2025
- **Description**: Language model. Price: $5.00 - $25.00 per million tokens.
- **Inputs**: Text, Image
- **Outputs**: Text
- **Input Token Limit**: 131,072 tokens
- **Output Token Limit**: 8,192 tokens
- **Key Features**: Function calling, Structured outputs
- **Model Card**: https://docs.x.ai/docs/models/grok-3-fast

---

## Groq Models

### Groq Hardware Acceleration
Groq provides ultra-fast inference for various language models through their specialized Language Processing Units (LPUs). They offer access to models like:

- **Llama 3.1 405B**: Large context reasoning model
- **Llama 3.1 70B**: Versatile instruction-following model
- **Llama 3.1 8B**: Efficient model for lighter workloads
- **Mixtral 8x7B**: Mixture of experts model
- **Gemma 2 9B**: Google's efficient model
- **Gemma 7B**: Lightweight alternative

**Key Features**: Ultra-fast inference speeds, Hardware acceleration, Low latency, Cost-effective processing
**Model Documentation**: https://console.groq.com/docs/models

---

## Perplexity AI Models

### Perplexity Pro Search
Perplexity provides real-time search capabilities with AI-powered responses:

- **Search Models**: Real-time web search with citations
- **Pro Features**: Enhanced accuracy, longer responses, file uploads
- **API Access**: Programmatic access to search capabilities

**Key Features**: Real-time web search, Source citations, Factual accuracy, Current information
**Documentation**: https://docs.perplexity.ai/

---

## Moonshot AI Models

### Kimi Models
Moonshot AI offers the Kimi series with web search capabilities:

- **Kimi Chat**: Conversational AI with web search
- **Context Length**: Extended context windows
- **Web Integration**: Real-time web search and browsing

**Key Features**: Web search integration, Extended context, Chinese language optimization, Real-time information
**Documentation**: Contact Moonshot AI for API details

---

## Qwen Models

### Qwen (Alibaba Cloud) Models
Qwen offers various model sizes and capabilities:

- **Qwen2.5**: Latest generation with improved capabilities
- **Qwen-VL**: Vision-language model
- **Qwen-Audio**: Audio processing capabilities
- **CodeQwen**: Specialized for code generation

**Key Features**: Multimodal capabilities, Thinking mode, Chinese language optimization, Code generation
**Documentation**: https://help.aliyun.com/zh/dashscope/

---

## API Integration Guidelines

### Authentication
Most providers require API keys for authentication:
```bash
# OpenAI
Authorization: Bearer YOUR_API_KEY

# Google AI
x-goog-api-key: YOUR_API_KEY

# Anthropic
x-api-key: YOUR_API_KEY

# xAI
Authorization: Bearer YOUR_API_KEY
```

### Rate Limits
- **OpenAI**: Varies by model and tier (10,000 RPM for GPT-4o)
- **Google**: 60 requests per minute (free tier)
- **Anthropic**: Varies by plan
- **xAI**: Contact for details

### Error Handling
Common HTTP status codes:
- `200`: Success
- `400`: Bad Request
- `401`: Unauthorized
- `429`: Rate Limit Exceeded
- `500`: Internal Server Error

### Best Practices
1. Implement exponential backoff for rate limits
2. Use structured outputs when available
3. Monitor token usage for cost optimization
4. Implement proper error handling
5. Cache responses when appropriate
6. Use streaming for long responses

---

## Security Considerations

### API Key Management
- Store API keys securely (environment variables)
- Rotate keys regularly
- Monitor usage for anomalies
- Use least privilege access

### Data Privacy
- Be aware of data retention policies
- Consider on-premises solutions for sensitive data
- Review terms of service for each provider
- Implement proper data handling procedures

### Content Safety
- Use built-in moderation filters
- Implement custom content filtering
- Monitor outputs for harmful content
- Follow responsible AI practices

---

Last updated: July 25, 2025