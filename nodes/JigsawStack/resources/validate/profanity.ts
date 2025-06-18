import {
    INodeProperties,
  } from 'n8n-workflow';
  import { returnResponse } from '../../utils';

export const Profanity: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: {
            show: {
                resource: ['profanity-detection'],
            },
        },
        noDataExpression: true,
        options: [
            {
                name: 'Profanity Detection',
                value: 'profanity-detection',
                action: 'Profanity detection',
                description: 'Detect if the text or content is profane',
                routing: {
                    request: {
                        method: 'POST',
                        url: '={{"/validate/profanity"}}',
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
        default: 'profanity-detection',
    },
    {
        displayName: 'Text',
        name: 'text',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                operation: ['profanity-detection'],
            },
        },
        description: 'The text to validate',
    },
    {
        displayName: 'Censor_replacement',
        name: 'censor_replacement',
        type: 'string',
        default: '*',
        displayOptions: {
            show: {
                operation: ['profanity-detection'],
            },
        },
        description: 'The text to replace the profane words with',
    },
];
