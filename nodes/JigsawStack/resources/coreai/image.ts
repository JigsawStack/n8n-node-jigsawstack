import {
  INodeProperties,
  IExecuteSingleFunctions,
  INodeExecutionData,
  IN8nHttpFullResponse,
} from 'n8n-workflow';
import { Buffer } from 'buffer';

export const Image: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    displayOptions: {
      show: {
        resource: ['image-generation'],
      },

    },
    options: [
      {
        name: 'Image Generation',
        value: 'image-generation',
        action: 'Generate Image',
        description: 'Generate an image using JigsawStack AI',
        routing: {
          request: {
            method: 'POST',
            url: '={{"/ai/image_generation"}}',
            body: {
              prompt: '={{$parameter.prompt}}',
              aspect_ratio: '={{$parameter.aspect_ratio}}',
              width: '={{$parameter.width}}',
              height: '={{$parameter.height}}',
              steps: '={{$parameter.steps}}',
              output_format: '={{$parameter.output_format}}',
              url: '={{$parameter.url ? $parameter.url : undefined}}',
              file_store_key: '={{$parameter.file_store_key}}',
              advance_config: '={{JSON.parse($parameter.advance_config)}}',
            },
          },
          output: {
            postReceive: [returnResponse],
          },
        },
      },
    ],
    default: 'image-generation',
  },
  {
    displayName: 'Prompt',
    name: 'prompt',
    type: 'string',
    required: true,
    default: '',
    description: 'The text prompt to generate the image from',
    displayOptions: {
      show: {
        operation: ['image-generation'],
      },
    },
  },
  {
    displayName: 'Aspect Ratio',
    name: 'aspect_ratio',
    type: 'options',
    options: [
      { name: '1:1', value: '1:1' },
      { name: '16:9', value: '16:9' },
      { name: '21:9', value: '21:9' },
      { name: '3:2', value: '3:2' },
      { name: '2:3', value: '2:3' },
      { name: '4:5', value: '4:5' },
      { name: '5:4', value: '5:4' },
      { name: '3:4', value: '3:4' },
      { name: '4:3', value: '4:3' },
      { name: '9:16', value: '9:16' },
      { name: '9:21', value: '9:21' },
    ],
    default: '1:1',
    displayOptions: {
      show: {
        operation: ['image-generation'],
      },
    },
  },
  {
    displayName: 'Width',
    name: 'width',
    type: 'number',
    default: 256,
    description: 'Width of the image (256-1920)',
    displayOptions: {
      show: {
        operation: ['image-generation'],
      },
    },
  },
  {
    displayName: 'Height',
    name: 'height',
    type: 'number',
    default: 256,
    description: 'Height of the image (256-1920)',
    displayOptions: {
      show: {
        operation: ['image-generation'],
      },
    },
  },
  {
    displayName: 'Steps',
    name: 'steps',
    type: 'number',
    default: 4,
    description: 'Number of denoising steps (1-90)',
    displayOptions: {
      show: {
        operation: ['image-generation'],
      },
    },
  },
  {
    displayName: 'Output Format',
    name: 'output_format',
    type: 'options',
    options: [
      { name: 'PNG', value: 'png' },
      { name: 'SVG', value: 'svg' },
    ],
    default: 'png',
    displayOptions: {
      show: {
        operation: ['image-generation'],
      },
    },
  },
  {
    displayName: 'URL',
    name: 'url',
    type: 'string',
    default: '',
    description: 'A valid URL where the generated image will be sent',
    displayOptions: {
      show: {
        operation: ['image-generation'],
      },
    },
  },
  {
    displayName: 'File Store Key',
    name: 'file_store_key',
    type: 'string',
    default: '',
    description: 'Key to store the generated image in file storage',
    displayOptions: {
      show: {
        operation: ['image-generation'],
      },
    },
  },
  {
    displayName: 'Advance Config',
    name: 'advance_config',
    type: 'json',
    default: '',
    description: 'Advanced configuration as JSON',
    displayOptions: {
      show: {
        operation: ['image-generation'],
      },
    },
  },
];


async function returnResponse(
  this: IExecuteSingleFunctions,
  items: INodeExecutionData[],
  responseData: IN8nHttpFullResponse,
): Promise<INodeExecutionData[]> {

  const buffer = Buffer.isBuffer(responseData.body)
    ? responseData.body
    : Buffer.from(responseData.body as any);

  const contentType = responseData.headers['content-type'] || 'image/png';
  const fileExtension = contentType.toString().includes('svg') ? 'svg' : 'png';
  const fileName = `generated_image.${fileExtension}`;

  const binaryData = await this.helpers.prepareBinaryData(
    buffer,
    fileName,
    contentType.toString(),
  );

  return items.map(() => ({
    json: { headers: responseData.headers },
    binary: {
      data: binaryData,
    },
  }));
}
