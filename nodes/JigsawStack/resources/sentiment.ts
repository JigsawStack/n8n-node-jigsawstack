import {
  INodeProperties,
  IExecuteSingleFunctions,
  INodeExecutionData,
  IN8nHttpFullResponse,
} from 'n8n-workflow';

export const Sentiment: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    displayOptions: {
      show: {
        resource: ['analyze-sentiment'],
      },
    },
    noDataExpression: true,
    options: [
      {
        name: 'Analyze Sentiment',
        value: 'analyze-sentiment',
        action: 'Analyze sentiment',
        description: 'Analyze the sentiment of text or content',
        routing: {
          request: {
            method: 'POST',
            url: '={{"/ai/sentiment"}}',
            body: {
              text: '={{$parameter.text}}',
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
    default: 'analyze-sentiment',
  },
  {
    displayName: 'Text',
    name: 'text',
    type: 'string',
    required: true,
    default: [],
    displayOptions: {
      show: {
        operation: ['analyze-sentiment'],
      },
    },
    description: 'The text to analyze for sentiment',
  },
];

async function returnResponse<PostReceiveAction>(this: IExecuteSingleFunctions, items: INodeExecutionData[], responseData: IN8nHttpFullResponse): Promise<INodeExecutionData[]> {
  return items.map(() => ({ json: responseData.body }));
} 