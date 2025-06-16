import {
  INodeProperties,
  IExecuteSingleFunctions,
  INodeExecutionData,
  IN8nHttpFullResponse,
} from 'n8n-workflow';

export const Embedding: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    displayOptions: {
      show: {
        resource: ['generate-embedding'],
      },
    },
    noDataExpression: true,
    options: [
      {
        name: 'Generate Embedding',
        value: 'generate-embedding',
        action: 'Generate embedding',
        description: 'Generate vector embeddings from various content types',
        routing: {
          request: {
            method: 'POST',
            url: '={{"/embedding"}}',
            body: {
              text: '={{$parameter.text}}',
              url: '={{$parameter.url}}',
              file_store_key: '={{$parameter.file_store_key}}',
              file_content: '={{$parameter.file_content}}',
              type: '={{$parameter.type}}',
              token_overflow_mode: '={{$parameter.token_overflow_mode}}',
            },
          },
          output: {
            postReceive: [
              returnResponse,
            ],
          },
        },
      },
    ],
    default: 'generate-embedding',
  },
  {
    displayName: 'Text',
    name: 'text',
    type: 'string',
    default: '',
    displayOptions: {
      show: {
        operation: ['generate-embedding'],
      },
    },
    description: 'The text content to generate embeddings for',
  },
  {
    displayName: 'URL',
    name: 'url',
    type: 'string',
    default: '',
    displayOptions: {
      show: {
        operation: ['generate-embedding'],
      },
    },
    description: 'A URL pointing to the resource to generate embeddings for',
  },
  {
    displayName: 'File Store Key',
    name: 'file_store_key',
    type: 'string',
    default: '',
    displayOptions: {
      show: {
        operation: ['generate-embedding'],
      },
    },
    description: 'A key referencing a previously uploaded file in storage',
  },
  {
    displayName: 'File Content',
    name: 'file_content',
    type: 'string',
    default: '',
    displayOptions: {
      show: {
        operation: ['generate-embedding'],
      },
    },
    description: 'The direct content of a file to generate embeddings for',
  },
  {
    displayName: 'Type',
    name: 'type',
    type: 'options',
    options: [
      { name: 'Text', value: 'text' },
      { name: 'Text Other', value: 'text-other' },
      { name: 'Image', value: 'image' },
      { name: 'Audio', value: 'audio' },
      { name: 'PDF', value: 'pdf' },
    ],
    required: true,
    default: 'text',
    displayOptions: {
      show: {
        operation: ['generate-embedding'],
      },
    },
    description: 'The type of content being processed',
  },
  {
    displayName: 'Token Overflow Mode',
    name: 'token_overflow_mode',
    type: 'options',
    options: [
      { name: 'Error', value: 'error' },
      { name: 'Truncate', value: 'truncate' },
    ],
    default: 'error',
    displayOptions: {
      show: {
        operation: ['generate-embedding'],
      },
    },
    description: 'Determines behavior when input exceeds token limits',
  },
];

async function returnResponse<PostReceiveAction>(this: IExecuteSingleFunctions, items: INodeExecutionData[], responseData: IN8nHttpFullResponse): Promise<INodeExecutionData[]> {
  return items.map(() => ({ json: responseData.body }));
}
