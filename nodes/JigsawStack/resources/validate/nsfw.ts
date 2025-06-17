import {
    INodeProperties,
    IExecuteSingleFunctions,
    INodeExecutionData,
    IN8nHttpFullResponse,
  } from 'n8n-workflow';
  
  export const NSFW: INodeProperties[] = [
    {
      displayName: 'Operation',
      name: 'operation',
      type: 'options',
      displayOptions: {
        show: {
          resource: ['nsfw-detection'],
        },
      },
      noDataExpression: true,
      options: [
        {
          name: 'NSFW Detection',
          value: 'nsfw-detection',
          action: 'NSFW Detection',
          description: 'Detect if the text or content is NSFW',
          routing: {
            request: {
              method: 'POST',
              url: '={{"/validate/nsfw"}}',
              body: {
                url: '={{$parameter.url}}',
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
      default: 'nsfw-detection',
    },
    {
      displayName: 'URL',
      name: 'url',
      type: 'string',
      required: true,
      default: [],
      displayOptions: {
        show: {
          operation: ['nsfw-detection'],
        },
      },
      description: 'The image URL to validate',
    },
  ];
  
  async function returnResponse<PostReceiveAction>(this: IExecuteSingleFunctions, items: INodeExecutionData[], responseData: IN8nHttpFullResponse): Promise<INodeExecutionData[]> {
    return items.map(() => ({ json: responseData.body }));
  } 