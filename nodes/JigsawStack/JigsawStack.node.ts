import {
  INodeType,
  INodeTypeDescription,
  NodeConnectionType,
} from 'n8n-workflow';
import { Translate } from './resources/translate';
import { WebSearch } from './resources/websearch';
import { Embedding } from './resources/embedding';
import { Sentiment } from './resources/sentiment';
import { TTS } from './resources/tts';
import { Image } from './resources/image';

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
        ],
        default: 'translate-text',
      },
      ...Translate,
      ...WebSearch,
      ...Embedding,
      ...Sentiment,
      ...TTS,
      ...Image,
    ],
  };
}
