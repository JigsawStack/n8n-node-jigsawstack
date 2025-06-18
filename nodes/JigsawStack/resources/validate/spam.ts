import {
    INodeProperties,
  } from 'n8n-workflow';
  import { returnResponse } from '../../utils';
  export const Spam: INodeProperties[] = [
    {
      displayName: 'Operation',
      name: 'operation',
      type: 'options',
      displayOptions: {
        show: {
          resource: ['spam-detection'],
        },
      },
      noDataExpression: true,
      options: [
        {
          name: 'Spam Detection',
          value: 'spam-detection',
          action: 'Spam Detection',
          description: 'Detect if the text or content is spam',
          routing: {
            request: {
              method: 'POST',
              url: '={{"/validate/spam_check"}}',
              body: {
                text: '={{$parameter.text}}',
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
      default: 'spam-detection',
    },
    {
      displayName: 'Text',
      name: 'text',
      type: 'string',
      required: true,
      typeOptions: {
        multipleValues: true,
      },
      default: [],
      displayOptions: {
        show: {
          operation: ['spam-detection'],
        },
      },
      description: 'The text to check for spam.',
    },
    
  ];
