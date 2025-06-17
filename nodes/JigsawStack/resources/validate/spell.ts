import {
    INodeProperties,
    IExecuteSingleFunctions,
    INodeExecutionData,
    IN8nHttpFullResponse,
  } from 'n8n-workflow';
  
  export const Spell: INodeProperties[] = [
    {
      displayName: 'Operation',
      name: 'operation',
      type: 'options',
      displayOptions: {
        show: {
          resource: ['spell-check'],
        },
      },
      noDataExpression: true,
      options: [
        {
          name: 'Spell Check',
          value: 'spell-check',
          action: 'Spell Check',
          description: 'Check the spelling of the text',
          routing: {
            request: {
              method: 'POST',
              url: '={{"/validate/spell_check"}}',
              body: {
                text: '={{$parameter.text}}',
                language_code: '={{$parameter.language_code}}',
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
      default: 'spell-check',
    },
    {
      displayName: 'Text',
      name: 'text',
      type: 'string',
      required: true,
      default: [],
      displayOptions: {
        show: {
          operation: ['spell-check'],
        },
      },
      description: 'The text to check',
    },
    {
        displayName: 'language code',
        name: 'language_code',
        type: 'string',
        required: true,
        default: 'en',
        displayOptions: {
          show: {
            operation: ['spell-check'],
          },
        },
        description: 'The language code of the text. Default is "en".',
      },
  ];
  
  async function returnResponse<PostReceiveAction>(this: IExecuteSingleFunctions, items: INodeExecutionData[], responseData: IN8nHttpFullResponse): Promise<INodeExecutionData[]> {
    return items.map(() => ({ json: responseData.body }));
  } 