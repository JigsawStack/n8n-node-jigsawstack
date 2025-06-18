import {
    INodeProperties,
} from 'n8n-workflow';
import { returnResponse } from '../../utils';

export const TranslateImage: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: {
            show: {
                resource: ['translate-image'],
            },
        },
        noDataExpression: true,
        options: [
            {
                name: 'Translate Image',
                value: 'translate-image',
                action: 'Translate image',
                description: 'Translate image from one language to another',
                routing: {
                    request: {
                        method: 'POST',
                        url: '={{"/ai/translate/image"}}',
                        body: {
                            url: '={{$parameter.url ? $parameter.url : undefined }}',
                            file_store_key: '={{$parameter.file_store_key ? $parameter.file_store_key : undefined}}',
                            target_language: '={{$parameter.target_language}}',
                            return_type: '={{$parameter.return_type}}',
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
        default: 'translate-image',
    },
    {
        displayName: 'Image Source',
        name: 'imageSource',
        type: 'options',
        required: true,
        default: 'url',
        displayOptions: {
            show: {
                operation: ['translate-image'],
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
        required: false,
        default: '',
        displayOptions: {
            show: {
                operation: ['translate-image'],
                imageSource: ['url'],
            },
        },
        description: 'The URL of the image to translate',
    },
    {
        displayName: 'File Store Key',
        name: 'file_store_key',
        type: 'string',
        required: false,
        default: '',
        displayOptions: {
            show: {
                operation: ['translate-image'],
                imageSource: ['file_store_key'],
            },
        },
        description: 'The key used to store the image on Jigsawstack File Storage',
    },
    {
        displayName: 'Target Language',
        name: 'target_language',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                operation: ['translate-image'],
            },
        },
        description: 'The target language code (e.g., "es" for Spanish)',
    },
    {
        displayName: "Return Type",
        name: "return_type",
        type: "options",
        default: "url",
        displayOptions: {
          show: {
            operation: ['translate-image'],
          },
        },
        options: [
          {
            name: "base64",
            value: "base64",
          },
          {
            name: "url",
            value: "url",
          },
          {
            name: "binary",
            value: "binary",
          },
        ],
        description: 'Return format for the translated image',
      },
];



