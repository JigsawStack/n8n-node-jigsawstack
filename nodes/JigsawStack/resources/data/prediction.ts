import {
    INodeProperties,
  } from 'n8n-workflow';
import { returnResponse } from '../../utils';
  
  export const Prediction: INodeProperties[] = [
    {
      displayName: 'Operation',
      name: 'operation',
      type: 'options',
      displayOptions: {
        show: {
          resource: ['make-prediction'],
        },
      },
      noDataExpression: true,
      options: [
        {
          name: 'Make Prediction',
          value: 'make-prediction',
          action: 'Make prediction',
          description: 'Forecast a wide range of time series data in seconds with one simple API and no data training',
          routing: {
            request: {
              method: 'POST',
              url: '={{"/ai/prediction"}}',
              body: {
                dataset: '={{JSON.parse($parameter.dataset)}}',
                steps: '={{$parameter.steps}}',
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
      default: 'make-prediction',
    },
    {
      displayName: 'Dataset',
      name: 'dataset',
      type: 'json',
      required: true,
      default: '',
      displayOptions: {
        show: {
          operation: ['make-prediction'],
        },
      },
      description: 'Array of objects with date and value pairs. Minimum 5 data points, maximum 1000 data points. Example: [{"date": "2023-01-01", "value": 100}, {"date": "2023-01-02", "value": 120}]',
      typeOptions: {
        alwaysOpenEditWindow: true,
      },
    },
    {
      displayName: 'Steps',
      name: 'steps',
      type: 'number',
      required: true,
      default: 5,
      displayOptions: {
        show: {
          operation: ['make-prediction'],
        },
      },
      description: 'Number of predictions to make. Minimum: 1, Maximum: 500.',
      typeOptions: {
        minValue: 1,
        maxValue: 500,
      },
    },
  ];
