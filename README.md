<img width="1024" alt="Screenshot 2025-06-18 at 1 43 10 AM" src="https://github.com/user-attachments/assets/234f078b-641d-411f-bba2-4a7781f699b3" />

# JigsawStack n8n Node

This n8n node provides integration with JigsawStack's powerful AI and data processing APIs. It allows you to easily incorporate various AI capabilities into your n8n workflows.

## Features

The JigsawStack node supports the following operations:

- **Text Processing**
  - Translate text between languages
  - Generate text embeddings
  - Analyze sentiment
  - Check spelling
  - Detect profanity
  - Generate text summaries
  - Convert natural language to SQL queries

- **Speech & Audio**
  - Text to Speech conversion

- **Image Processing**
  - Generate images
  - Process images
  - Detect objects in images
  - NSFW content detection

- **Web & Data**
  - Web search
  - AI-powered web scraping
  - Web suggestions
  - Spam detection

- **AI & Machine Learning**
  - Make predictions
  - Generate embeddings

## Prerequisites

- n8n instance (self-hosted or cloud)
- JigsawStack API key

## Installation

1. Install the node in your n8n instance:
   ```bash
   npm install n8n-nodes-jigsawstack
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

## Resources

- [JigsawStack Documentation](https://docs.jigsawstack.com)
- [n8n Documentation](https://docs.n8n.io)
- [n8n Community](https://community.n8n.io)

## Support

For support with this node:
- Open an issue on [GitHub](https://github.com/jigsawstack/n8n-nodes-jigsawstack)


[MIT](LICENSE.md)
