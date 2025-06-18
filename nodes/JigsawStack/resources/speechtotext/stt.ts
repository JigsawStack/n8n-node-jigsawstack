import {
    INodeProperties,
    IExecuteSingleFunctions,
    INodeExecutionData,
    IN8nHttpFullResponse,
} from 'n8n-workflow';

export const STT: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: {
            show: {
                resource: ['speech-to-text'],
            },
        },
        noDataExpression: true,
        options: [
            {
                name: 'Speech to Text',
                value: 'speech-to-text',
                action: 'Transcribe audio to text',
                description: 'Convert audio files into text using AI speech recognition',
                routing: {
                    request: {
                        method: 'POST',
                        url: '={{"/ai/transcribe"}}',
                        body: {
                            url: '={{$parameter.audioSource === "url" ? $parameter.url : undefined}}',
                            file_store_key: '={{$parameter.audioSource === "file_store_key" ? $parameter.file_store_key : undefined}}',
                            language: '={{$parameter.language && $parameter.language !== "" ? $parameter.language : undefined}}',
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
        default: 'speech-to-text',
    },
    {
        displayName: 'Audio Source',
        name: 'audioSource',
        type: 'options',
        required: true,
        default: 'url',
        displayOptions: {
            show: {
                operation: ['speech-to-text'],
            },
        },
        options: [
            {
                name: 'Audio URL',
                value: 'url',
            },
            {
                name: 'File Store Key',
                value: 'file_store_key',
            },
        ],
        description: 'Choose the source of the audio',
    },
    {
        displayName: 'Audio URL',
        name: 'url',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                operation: ['speech-to-text'],
                audioSource: ['url'],
            },
        },
        description: 'The URL of the image to process',
    },
    {
        displayName: 'File Store Key',
        name: 'file_store_key',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                operation: ['speech-to-text'],
                audioSource: ['file_store_key'],
            },
        },
        description: 'The key used to store the audio on Jigsawstack File Storage',
    },
    {
        displayName: 'Language',
        name: 'language',
        type: 'string',
        required: false,
        default: '',
        displayOptions: {
            show: {
                operation: ['speech-to-text'],
            },
        },
        description: 'Language code for transcription (e.g., en, es, fr). Leave blank for auto-detect.',
    },
    {
        displayName: 'Translate',
        name: 'translate',
        type: 'boolean',
        required: false,
        default: false,
        displayOptions: {
            show: {
                operation: ['speech-to-text'],
            },
        },
        description: 'Translate the content into English (or the specified language if language is provided).',
    },
    {
        displayName: 'By Speaker',
        name: 'by_speaker',
        type: 'boolean',
        required: false,
        default: false,
        displayOptions: {
            show: {
                operation: ['speech-to-text'],
            },
        },
        description: 'Identify and separate different speakers in the audio file.',
    },
    {
        displayName: 'Webhook URL',
        name: 'webhook_url',
        type: 'string',
        required: false,
        default: '',
        displayOptions: {
            show: {
                operation: ['speech-to-text'],
            },
        },
        description: 'Webhook URL to send result to. If provided, the API will process asynchronously and send results to this URL when completed.',
    },
    {
        displayName: 'Batch Size',
        name: 'batch_size',
        type: 'number',
        required: false,
        default: 30,
        displayOptions: {
            show: {
                operation: ['speech-to-text'],
            },
        },
        description: 'The batch size to return. Maximum value is 40. This controls how the audio is chunked for processing.',
    },
];

async function returnResponse<PostReceiveAction>(
    this: IExecuteSingleFunctions,
    items: INodeExecutionData[],
    responseData: IN8nHttpFullResponse,
): Promise<INodeExecutionData[]> {
    return items.map(() => ({ json: responseData.body }));
}