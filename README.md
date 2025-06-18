<img width="1024" alt="Screenshot 2025-06-18 at 1 43 10 AM" src="https://github.com/user-attachments/assets/234f078b-641d-411f-bba2-4a7781f699b3" />

# JigsawStack n8n Node

This n8n node provides integration with JigsawStack's powerful AI and data processing APIs. It allows you to easily incorporate various AI capabilities into your n8n workflows.

## Features

The JigsawStack node supports the following operations:

- **Text Processing**
  - Translate text between languages
  - Generate text embeddings (supports text, images, audio, and PDF files)
  - Analyze sentiment
  - Check spelling
  - Detect profanity
  - Generate text summaries
  - Convert natural language to SQL queries

- **Speech & Audio**
  - Text to Speech conversion
  - Speech to Text conversion with Whisper V3 (supports multiple languages, speaker identification, translation, and batch processing)

- **Image Processing**
  - Generate images from text descriptions
  - Process images with AI-powered analysis
  - Detect objects in images
  - NSFW content detection
  - Visual OCR (VOCR) for extracting text and data from images
  - Translate text within images
  - Support for multi-page document processing

- **Web & Data**
  - Web search with AI-powered results
  - AI-powered web scraping
  - HTML to Any conversion (screenshots, images, PDFs)
  - Web suggestions
  - Spam detection

- **AI & Machine Learning**
  - Make predictions using trained models
  - Generate embeddings from multiple content types (text, images, audio, PDF)
  - Token overflow handling for large content

## Prerequisites

- n8n instance (self-hosted or cloud)
- Node.js >=20.15
- JigsawStack API key

## Installation

1. Install the node in your n8n instance:
   ```bash
   npm install n8n-node-jigsawstack
   ```

2. Restart your n8n instance

## Authentication

To use this node, you need to:

1. Sign up for a JigsawStack account at [jigsawstack.com](https://jigsawstack.com)
2. Get your API key from the JigsawStack dashboard
3. In n8n, add your JigsawStack credentials:
   - Go to Settings > Credentials
   - Click "New"
   - Select "JigsawStack API"
   - Enter your API key
    
## Usage

1. Add the JigsawStack node to your workflow
2. Select the desired operation from the Resource dropdown
3. Configure the operation-specific parameters
4. Connect the node to other nodes in your workflow

## Available Resources

- **Translate Text** - Translate text between different languages
- **Translate Image** - Translate text within images
- **Search Web** - Perform web searches
- **Generate Embedding** - Create text embeddings for AI applications
- **Analyze Sentiment** - Analyze the sentiment of text
- **Text to Speech** - Convert text to speech
- **Speech to Text** - Convert speech to text
- **Image Generation** - Generate images from text descriptions
- **NSFW Detection** - Detect inappropriate content in images
- **Profanity Detection** - Detect profane language in text
- **Spell Check** - Check and correct spelling in text
- **Spam Detection** - Detect spam content
- **Summary** - Generate text summaries
- **Make Prediction** - Make predictions using AI models
- **Convert to SQL** - Convert natural language to SQL queries
- **Web Suggestion** - Get web search suggestions
- **AI Scrape** - Scrape websites using AI
- **HTML to Any** - Convert HTML/URLs to images (PNG, JPEG, WebP) or PDFs with screenshots
- **Process Image** - Process and manipulate images
- **Object Detection** - Detect objects in images
- **Visual OCR (VOCR)** - Extract text from images

## Resources

- [JigsawStack Documentation](https://docs.jigsawstack.com)
- [n8n Documentation](https://docs.n8n.io)
- [n8n Community](https://community.n8n.io)

## Support

For support with this node:
- Open an issue on [GitHub](https://github.com/JigsawStack/n8n-integration)

## License

[MIT](LICENSE.md)
