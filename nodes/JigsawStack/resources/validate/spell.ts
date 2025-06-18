import {
    INodeProperties,
  } from 'n8n-workflow';
  import { returnResponse } from '../../utils';
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
          action: 'Spell check',
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
      default: '',
      displayOptions: {
        show: {
          operation: ['spell-check'],
        },
      },
      description: 'The text to check',
    },
    {
        displayName: 'Language Code',
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
