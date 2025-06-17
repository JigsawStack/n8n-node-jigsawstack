import {
    INodeProperties,
    IExecuteSingleFunctions,
    INodeExecutionData,
    IN8nHttpFullResponse,
} from 'n8n-workflow';

export const ObjectDetection: INodeProperties[] = [
    {
        displayName: 'Operation Object Detection',
        name: 'operation',
        type: 'options',
        displayOptions: {
            show: {
                resource: ['object-detection'],
            },
        },
        noDataExpression: true,
        options: [
            {
                name: 'Object Detection',
                value: 'object-detection',
                action: 'Object detection',
                description: 'Detect objects in an image',
                routing: {
                    request: {
                        method: 'POST',
                        url: '={{"/ai/object_detection"}}',
                        body: {
                            url: '={{$parameter.url && $parameter.url !== "" ? $parameter.url : undefined}}',
                            file_store_key: '={{$parameter.file_store_key && $parameter.file_store_key !== "" ? $parameter.file_store_key : undefined}}',
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
        default: 'object-detection',
    },
    
    {
        displayName: 'Image Source',
        name: 'imageSource',
        type: 'options',
        required: true,
        default: 'url',
        displayOptions: {
            show: {
                operation: ['object-detection'],
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
                operation: ['object-detection'],
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
                operation: ['object-detection'],
                imageSource: ['file_store_key'],
            },
        },
        description: 'The key used to store the image on Jigsawstack File Storage',
    },
];

async function returnResponse<PostReceiveAction>(this: IExecuteSingleFunctions, items: INodeExecutionData[], responseData: IN8nHttpFullResponse): Promise<INodeExecutionData[]> {
    return items.map(() => ({ json: responseData.body }));
}
