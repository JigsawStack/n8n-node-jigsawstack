import {
  ICredentialType,
  INodeProperties,
} from 'n8n-workflow';

export class JigsawStackApi implements ICredentialType {
  name = 'jigsawStackApi';
  displayName = 'JigsawStack API';
  documentationUrl = 'https://jigsawstack.com/docs';
  properties: INodeProperties[] = [
    {
      displayName: 'API Key',
      name: 'apiKey',
      type: 'string',
      typeOptions: {
        password: true,
      },
      default: '',
      required: true,
    },
  ];
} 