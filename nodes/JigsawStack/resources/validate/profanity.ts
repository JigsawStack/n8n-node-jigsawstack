import {
    INodeProperties,
    IExecuteSingleFunctions,
    INodeExecutionData,
    IN8nHttpFullResponse,
} from 'n8n-workflow';

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
                action: 'Profanity Detection',
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
        default: [],
        displayOptions: {
            show: {
                operation: ['profanity-detection'],
            },
        },
        description: 'The text to validate',
    },
    {
        displayName: 'censor_replacement',
        name: 'censor_replacement',
        type: 'string',
        required: false,
        default: '*',
        displayOptions: {
            show: {
                operation: ['profanity-detection'],
            },
        },
        description: 'The text to replace the profane words with',
    },
];

async function returnResponse<PostReceiveAction>(this: IExecuteSingleFunctions, items: INodeExecutionData[], responseData: IN8nHttpFullResponse): Promise<INodeExecutionData[]> {
    return items.map(() => ({ json: responseData.body }));
} 