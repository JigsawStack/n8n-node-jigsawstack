import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
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

  authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'x-api-key': '={{$credentials.apiKey}}',
				accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
	};

  test: ICredentialTestRequest = {
    request: {
      method: 'POST',
      url: 'https://api.jigsawstack.com/v1/ai/translate',
      body: {
        text: ['Hello'],
        target_language: 'zh',
      },
      json: true,
    },
  };
}
