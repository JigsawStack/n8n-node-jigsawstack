import {
    INodeProperties,
} from 'n8n-workflow';
import { returnResponse } from '../../utils';

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
                description: 'Generate concise, intelligent summaries of text or documents with AI',
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
        displayName: 'Summary Source',
        name: 'summarySource',
        type: 'options',
        required: true,
        default: 'text',
        displayOptions: {
            show: {
                operation: ['summary'],
            },
        },
        options: [
            {
                name: 'Text',
                value: 'text',
            },
            {
                name: 'URL',
                value: 'url',
            },
            {
                name: 'File Store Key',
                value: 'file_store_key',
            },
        ],
        description: 'Choose the source of the summary',
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
                summarySource: ['text'],
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
                summarySource: ['url'],
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
                summarySource: ['file_store_key'],
            },
        },
        description: 'The key of a stored document to summarize from Jigsawstack File Storage. Not required if text or url is provided.',
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
        description: 'The format of the summary: - text: Returns a continuous paragraph summary - points: Returns bullet points as an array of strings',
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