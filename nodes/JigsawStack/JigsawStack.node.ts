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
								noDataExpression: true,
        options: [
          { name: 'AI Scrape', value: 'ai-scrape' },
          { name: 'Analyze Sentiment', value: 'analyze-sentiment' },
          { name: 'Convert to SQL', value: 'convert-to-sql' },
          { name: 'Generate Embedding', value: 'generate-embedding' },
          { name: 'HTML to Any', value: 'html-to-any' },
          { name: 'Image Generation', value: 'image-generation' },
          { name: 'Make Prediction', value: 'make-prediction' },
          { name: 'NSFW Detection', value: 'nsfw-detection' },
          { name: 'Object Detection', value: 'object-detection' },
          { name: 'Process Image', value: 'process-image' },
          { name: 'Profanity Detection', value: 'profanity-detection' },
          { name: 'Search Web', value: 'search-web' },
          { name: 'Spam Detection', value: 'spam-detection' },
          { name: 'Speech to Text', value: 'speech-to-text' },
          { name: 'Spell Check', value: 'spell-check' },
          { name: 'Summary', value: 'summary' },
          { name: 'Text to Speech', value: 'text-to-speech' },
          { name: 'Translate', value: 'translate-text' },
          { name: 'Translate Image', value: 'translate-image' },
          { name: 'Web Suggestion', value: 'web-suggestion' },
        ],
        default: 'translate-text',
      },
      ...resources,
    ],
  };
}
