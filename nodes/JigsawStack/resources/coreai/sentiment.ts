import {
  INodeProperties,
} from 'n8n-workflow';
import { returnResponse } from '../../utils';

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
        description: 'Perform line by line sentiment analysis on any text with detailed emotion detection',
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
    default: '',
    displayOptions: {
      show: {
        operation: ['analyze-sentiment'],
      },
    },
    description: 'The text to analyze for sentiment',
  },
];