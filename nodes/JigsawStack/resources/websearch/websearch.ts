import {
	INodeProperties,
} from 'n8n-workflow';
import { returnResponse } from '../../utils';

export const WebSearch: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['search-web'],
			},
		},
		noDataExpression: true,
		options: [
			{
				name: 'Search Web',
				value: 'search-web',
				action: 'Search the web',
				description: 'Search the web using JigsawStack AI',
				routing: {
					request: {
						method: 'POST',
						url:'={{"/web/search"}}',
						body: {
							query: '={{$parameter.query}}',
							ai_overview: '={{$parameter.ai_overview}}',
							safe_search: '={{$parameter.safe_search}}',
							spell_check: '={{$parameter.spell_check}}',
							byo_urls: '={{$parameter.byo_urls}}',
							deep_research: '={{$parameter.deep_research}}',
							deep_research_config: '={{$parameter.deep_research_config}}',
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
		default: 'search-web',
	},
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['search-web'],
			},
		},
		description: 'The search query (max 400 characters)',
	},
	{
		displayName: 'AI Overview',
		name: 'ai_overview',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: {
				operation: ['search-web'],
			},
		},
		description: 'Whether to include AI powered overview in the search results',
	},
	{
		displayName: 'Safe Search',
		name: 'safe_search',
		type: 'options',
		options: [
			{ name: 'Moderate', value: 'moderate' },
			{ name: 'Strict', value: 'strict' },
			{ name: 'Off', value: 'off' },
		],
		default: 'moderate',
		displayOptions: {
			show: {
				operation: ['search-web'],
			},
		},
		description: 'Include offensive results in the search results',
	},
	{
		displayName: 'Spell Check',
		name: 'spell_check',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: {
				operation: ['search-web'],
			},
		},
		description: 'Whether to spell check the search query',
	},
	{
		displayName: 'BYO URLs',
		name: 'byo_urls',
		type: 'string',
		typeOptions: {
			multipleValues: true,
			multipleValueButtonText: 'Add URL',
		},
		default: [],
		displayOptions: {
			show: {
				operation: ['search-web'],
			},
		},
		description: 'Return results from the specified URLs (array of URLs)',
	},
	{
		displayName: 'Deep Research',
		name: 'deep_research',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				operation: ['search-web'],
			},
		},
		description: 'Whether to toggle deep research mode',
	},
	{
		displayName: 'Deep Research Config',
		name: 'deep_research_config',
		type: 'json',
		default: '',
		displayOptions: {
			show: {
				operation: ['search-web'],
				deep_research: [true],
			},
		},
		description: 'The deep research configuration as JSON (max_depth, max_breadth, max_output_tokens, target_output_tokens)',
	},
];




