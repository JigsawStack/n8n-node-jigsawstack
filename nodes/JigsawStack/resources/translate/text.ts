import {
	INodeProperties,
} from 'n8n-workflow';
import { returnResponse } from '../../utils';

export const TranslateText: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
        displayOptions: {
            show: {
                resource: ['translate-text'],
            },
        },
		noDataExpression: true,
		options: [
			{
				name: 'Translate Text',
				value: 'translate-text',
				action: 'Translate text',
				description: 'Translate text from one language to another',
				routing: {
					request: {
						method: 'POST',
						url: '={{"/ai/translate"}}',
						body: {
							text: '={{$parameter.text}}',
							target_language: '={{$parameter.target_language}}',
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
		default: 'translate-text',
	},
	{
        displayName: 'Text',
        name: 'text',
        type: 'string',
        typeOptions: {
            multipleValues: true,
            multipleValueButtonText: 'Add Text',
        },
        required: true,
        default: [],
        displayOptions: {
            show: {
                operation: ['translate-text'],
            },
        },
        description: 'The text(s) to translate',
    },
    
	{
		displayName: 'Target Language',
		name: 'target_language',
		type: 'string',
		required: true,
		default: '',
        displayOptions: {
            show: {
                operation: ['translate-text'],
            },
        },
		description: 'The target language code (e.g., "es" for Spanish)',
	},
];



