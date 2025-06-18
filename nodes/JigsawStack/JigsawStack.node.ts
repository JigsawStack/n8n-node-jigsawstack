import {
  INodeType,
  INodeTypeDescription,
  NodeConnectionType,
} from 'n8n-workflow';
import { resources } from './resources';

export class JigsawStack implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'JigsawStack',
    name: 'jigsawStack',
    icon: 'file:jigsawstack.svg',
    group: ['transform'],
    version: 1,
    description: 'Use JigsawStack API',
    defaults: {
      name: 'JigsawStack',
    },
    requestDefaults: {
      baseURL: 'https://api.jigsawstack.com/v1',
      headers: {
        'x-api-key': '={{$credentials.apiKey}}',
        'Content-Type': 'application/json',
      },
    },
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    inputs: [
      {
        type: NodeConnectionType.Main,
      },
    ],
    outputs: [
      {
        type: NodeConnectionType.Main,
      },
    ],
    credentials: [
      {
        name: 'jigsawStackApi',
        required: true,
      },
    ],
    properties: [
      {
        displayName: 'Resource',
        name: 'resource',
        type: 'options',
        options: [
          { name: 'Translate', value: 'translate-text' },
          { name: 'Search Web', value: 'search-web' },
          { name: 'Generate Embedding', value: 'generate-embedding' },
          { name: 'Analyze Sentiment', value: 'analyze-sentiment' },
          { name: 'Text to Speech', value: 'text-to-speech' },
          { name: 'Image Generation', value: 'image-generation' },
          { name: 'NSFW Detection', value: 'nsfw-detection' },
          { name: 'Profanity Detection', value: 'profanity-detection' },
          { name: 'Spell Check', value: 'spell-check' },
          { name: 'Spam Detection', value: 'spam-detection' },
          { name: 'Summary', value: 'summary' },
          { name: 'Make Prediction', value: 'make-prediction' },
          { name: 'Convert to SQL', value: 'convert-to-sql' },
          { name: 'Web Suggestion', value: 'web-suggestion' },
          { name: 'AI Scrape', value: 'ai-scrape' },
          { name: 'Process Image', value: 'process-image' },
          { name: 'Object Detection', value: 'object-detection' },
          { name: 'Speech to Text', value: 'speech-to-text' },
        ],
        default: 'translate-text',
      },
      ...resources,
    ],
  };
}
