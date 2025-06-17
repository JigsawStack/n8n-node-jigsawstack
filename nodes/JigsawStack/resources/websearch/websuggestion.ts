import {
    INodeProperties,
    IExecuteSingleFunctions,
    INodeExecutionData,
    IN8nHttpFullResponse,
} from 'n8n-workflow';

export const WebSuggestion: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: {
            show: {
                resource: ['web-suggestion'],
            },
        },
        noDataExpression: true,
        options: [
            {
                name: 'Web Suggestion',
                value: 'web-suggestion',
                action: 'Web suggestion',
                description: 'Get web suggestions for a given query',
                routing: {
                    request: {
                        method: 'GET',
                        url: '={{"/web/search/suggest?query=" + $parameter.query}}',
                    },
                    output: {
                        postReceive: [
                            returnResponse,
                        ],
                    },
                },
            },
        ],
        default: 'web-suggestion',
    },
    {
        displayName: 'Query',
        name: 'query',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                operation: ['web-suggestion'],
            },
        },
        description: 'The query to get web suggestions for',
    },
];

async function returnResponse<PostReceiveAction>(this: IExecuteSingleFunctions, items: INodeExecutionData[], responseData: IN8nHttpFullResponse): Promise<INodeExecutionData[]> {
    return items.map(() => ({ json: responseData.body }));
}
