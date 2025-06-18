import {
    INodeProperties,
} from 'n8n-workflow';
import { returnResponse } from '../../utils';
export const Vocr: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: {
            show: {
                resource: ['process-image'],
            },
        },
        noDataExpression: true,
        options: [
            {
                name: 'Process Image',
                value: 'process-image',
                action: 'Process image with vOCR',
                description: 'Process an image using vOCR to recognize and extract data',
                routing: {
                    request: {
                        method: 'POST',
                        url: '={{"/vocr"}}',
                        body: {
                            url: '={{$parameter.url && $parameter.url !== "" ? $parameter.url : undefined}}',
                            file_store_key: '={{$parameter.file_store_key && $parameter.file_store_key !== "" ? $parameter.file_store_key : undefined}}',
                            prompt: '={{$parameter.prompt && $parameter.prompt !== "" ? $parameter.prompt : undefined}}',
                            page_range: '={{$parameter.page_range && $parameter.page_range !== "" ? JSON.parse($parameter.page_range) : undefined}}',
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
        default: 'process-image',
    },
    {
        displayName: 'Prompt',
        name: 'prompt',
        type: 'string',
        required: true,
        default: 'Describe the image in detail.',
        displayOptions: {
            show: {
                operation: ['process-image'],
            },
        },
        description: 'The prompt used to describe the image or specific data to extract',
    },
    {
        displayName: 'Image Source',
        name: 'imageSource',
        type: 'options',
        required: true,
        default: 'url',
        displayOptions: {
            show: {
                operation: ['process-image'],
            },
        },
        options: [
            {
                name: 'Image URL',
                value: 'url',
            },
            {
                name: 'File Store Key',
                value: 'file_store_key',
            },
        ],
        description: 'Choose the source of the image',
    },
    {
        displayName: 'Image URL',
        name: 'url',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                operation: ['process-image'],
                imageSource: ['url'],
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
                operation: ['process-image'],
                imageSource: ['file_store_key'],
            },
        },
        description: 'The key used to store the image on Jigsawstack File Storage',
    },
    {
        displayName: 'Page Range',
        name: 'page_range',
        type: 'collection',
        required: false,
        default: {},
        displayOptions: {
            show: {
                operation: ['process-image'],
            },
        },
        description: 'Specify a range of pages to process (for multi-page documents)',
        options: [
            {
                displayName: 'Start Page',
                name: 'startPage',
                type: 'number',
                default: 1,
                description: 'The starting page number (inclusive)',
            },
            {
                displayName: 'End Page',
                name: 'endPage',
                type: 'number',
                default: 1,
                description: 'The ending page number (inclusive)',
            },
        ],
    },
];

