import {
    INodeProperties,
    IExecuteSingleFunctions,
    INodeExecutionData,
    IN8nHttpFullResponse,
} from 'n8n-workflow';


async function returnResponse<PostReceiveAction>(this: IExecuteSingleFunctions, items: INodeExecutionData[], responseData: IN8nHttpFullResponse): Promise<INodeExecutionData[]> {
    return items.map(() => ({ json: responseData.body }));
}

export const Summary: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: {
            show: {
                resource: ['summary'],
            },
        },
        noDataExpression: true,
        options: [
            {
                name: 'Summary',
                value: 'summary',
                action: 'Summary',
                description: 'Summarize the text',
                routing: {
                    request: {
                        method: 'POST',
                        url: '={{"/ai/summary"}}',
                        body: {
                            text: '={{$parameter.text}}',
                            url: '={{$parameter.url && $parameter.url !== "" ? $parameter.url : undefined}}',
                            file_store_key: '={{$parameter.file_store_key && $parameter.file_store_key !== "" ? $parameter.file_store_key : undefined}}',
                            type: '={{$parameter.type}}',
                            max_points: '={{$parameter.max_points}}',
                            max_characters: '={{$parameter.max_characters}}',
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
        default: 'summary',
    },
    {
        displayName: 'Text',
        name: 'text',
        type: 'string',
        required: false,
        default: [],
        displayOptions: {
            show: {
                operation: ['summary'],
            },
        },
        description: 'The text content to summarize. Maximum 300,000 characters. Not required if url or file_store_key is specified.',
    },
    {
        displayName: 'URL',
        name: 'url',
        type: 'string',
        required: false,
        default: '',
        displayOptions: {
            show: {
                operation: ['summary'],
            },
        },
        description: 'URL of a PDF document to summarize. Not required if text or file_store_key is provided.',
    },
    {
        displayName: 'File Store Key',
        name: 'file_store_key',
        type: 'string',
        required: false,
        default: '',
        displayOptions: {
            show: {
                operation: ['summary'],
            },
        },
        description: 'The key of a stored PDF document to summarize from Jigsawstack File Storage. Not required if text or url is provided.',
    },
    {
        displayName: 'Type',
        name: 'type',
        type: 'options',
        required: false,
        default: 'text',
        options: [
            {
                name: 'Text',
                value: 'text',
                description: 'Returns a continuous paragraph summary',
            },
            {
                name: 'Points',
                value: 'points',
                description: 'Returns bullet points as an array of strings',
            },
        ],
        displayOptions: {
            show: {
                operation: ['summary'],
            },
        },
        description: 'The format of the summary',
    },
    {
        displayName: 'Max Points',
        name: 'max_points',
        type: 'number',
        required: false,
        default: 2,
        typeOptions: {
            minValue: 1,
            maxValue: 100,
        },
        displayOptions: {
            show: {
                operation: ['summary'],
                type: ['points'],
            },
        },
        description: 'The maximum number of bullet points to generate when type is set to points. Maximum value is 100.',
    },
    {
        displayName: 'Max Characters',
        name: 'max_characters',
        type: 'number',
        required: false,
        default: 200,
        displayOptions: {
            show: {
                operation: ['summary'],
            },
        },
        description: 'The maximum number of characters in the generated summary.',
    },
]; 