import {
    INodeProperties,
  } from 'n8n-workflow';
import { returnResponse } from '../../utils';
  
  export const TextToSql: INodeProperties[] = [
    {
      displayName: 'Operation',
      name: 'operation',
      type: 'options',
      displayOptions: {
        show: {
          resource: ['convert-to-sql'],
        },
      },
      noDataExpression: true,
      options: [
        {
          name: 'Convert to SQL',
          value: 'convert-to-sql',
          action: 'Convert natural language to SQL',
          description: 'Convert natural language to SQL queries for various database types.',
          routing: {
            request: {
              method: 'POST',
              url: '={{"/ai/sql"}}',
              body: {
                prompt: '={{$parameter.prompt}}',
                database: '={{$parameter.database}}',
                sql_schema: '={{$parameter.sql_schema}}',
                file_store_key: '={{$parameter.file_store_key}}',
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
      default: 'convert-to-sql',
    },
    {
      displayName: 'Prompt',
      name: 'prompt',
      type: 'string',
      required: true,
      default: '',
      displayOptions: {
        show: {
          operation: ['convert-to-sql'],
        },
      },
      description: 'The natural language prompt that will be translated to an SQL query',
      placeholder: 'Find all transactions with amounts exceeding $10,000, sorted by transaction date',
    },
    {
      displayName: 'Database Type',
      name: 'database',
      type: 'options',
      required: true,
      default: 'postgresql',
      displayOptions: {
        show: {
          operation: ['convert-to-sql'],
        },
      },
      options: [
        {
          name: 'PostgreSQL',
          value: 'postgresql',
        },
        {
          name: 'MySQL',
          value: 'mysql',
        },
        {
          name: 'SQLite',
          value: 'sqlite',
        },
      ],
      description: 'The database type to generate SQL for',
    },
    {
      displayName: 'Prompt Source',
      name: 'promptSource',
      type: 'options',
      required: true,
      default: 'text',
      displayOptions: {
        show: {
          operation: ['convert-to-sql'],
        },
      },
      options: [
        {
          name: 'SQL Schema',
          value: 'sql_schema',
        },
        {
          name: 'File Store Key',
          value: 'file_store_key',
        },
      ],
      description: 'Choose the source of the prompt',
    },
    {
      displayName: 'SQL Schema',
      name: 'sql_schema',
      type: 'string',
      default: '',
      displayOptions: {
        show: {
          operation: ['convert-to-sql'],
          promptSource: ['sql_schema'],
        },
      },
      description: 'The database schema where the query will be run',
      typeOptions: {
        rows: 5,
      },
    },
    {
      displayName: 'File Store Key',
      name: 'file_store_key',
      type: 'string',
      default: '',
      displayOptions: {
        show: {
          operation: ['convert-to-sql'],
          promptSource: ['file_store_key'],
        },
      },
      description: 'The key used to store the database schema on Jigsawstack fileStorage',
    },
  ];

  