import {
    INodeProperties,
    IExecuteSingleFunctions,
    INodeExecutionData,
    IN8nHttpFullResponse,
} from 'n8n-workflow';

export const WebScrape: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: {
            show: {
                resource: ['ai-scrape'],
            },
        },
        noDataExpression: true,
        options: [
            {
                name: 'AI Scrape',
                value: 'ai-scrape',
                action: 'Scrape website with AI',
                description: 'Scrape any website instantly and get consistent structured data in seconds without writing any CSS selector code',
                routing: {
                    request: {
                        method: 'POST',
                        url: '={{"/ai/scrape"}}',
                        body: {
                            url: '={{$parameter.url && $parameter.url !== "" ? $parameter.url : undefined}}',
                            html: '={{$parameter.html && $parameter.html !== "" ? $parameter.html : undefined}}',
                            element_prompts: '={{$parameter.element_prompts && $parameter.element_prompts.length > 0 ? $parameter.element_prompts : undefined}}',
                            root_element_selector: '={{$parameter.root_element_selector && $parameter.root_element_selector !== "" ? $parameter.root_element_selector : undefined}}',
                            page_position: '={{$parameter.page_position && $parameter.page_position > 0 ? $parameter.page_position : undefined}}',
                            advance_config: '={{$parameter.advance_config && $parameter.advance_config !== "" ? JSON.parse($parameter.advance_config) : undefined}}',
                            http_headers: '={{$parameter.http_headers && $parameter.http_headers !== "" ? JSON.parse($parameter.http_headers) : undefined}}',
                            reject_request_pattern: '={{$parameter.reject_request_pattern && $parameter.reject_request_pattern.length > 0 ? $parameter.reject_request_pattern : undefined}}',
                            goto_options: '={{$parameter.goto_options && $parameter.goto_options !== "" ? JSON.parse($parameter.goto_options) : undefined}}',
                            wait_for: '={{$parameter.wait_for && $parameter.wait_for !== "" ? JSON.parse($parameter.wait_for) : undefined}}',
                            cookies: '={{$parameter.cookies && $parameter.cookies !== "" ? JSON.parse($parameter.cookies) : undefined}}',
                            size_preset: '={{$parameter.size_preset && $parameter.size_preset !== "" ? $parameter.size_preset : undefined}}',
                            is_mobile: '={{$parameter.is_mobile !== undefined ? $parameter.is_mobile : undefined}}',
                            scale: '={{$parameter.scale && $parameter.scale >= 1 ? $parameter.scale : undefined}}',
                            width: '={{$parameter.width && $parameter.width > 0 ? $parameter.width : undefined}}',
                            height: '={{$parameter.height && $parameter.height > 0 ? $parameter.height : undefined}}',
                            force_rotate_proxy: '={{$parameter.force_rotate_proxy !== undefined ? $parameter.force_rotate_proxy : undefined}}',
                            byo_proxy: '={{$parameter.byo_proxy && $parameter.byo_proxy !== "" ? JSON.parse($parameter.byo_proxy) : undefined}}',
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
        default: 'ai-scrape',
    },
    {
        displayName: 'URL',
        name: 'url',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                operation: ['ai-scrape'],
            },
        },
        description: 'URL of the page to scrape. Either url or html is required, but not both.',
    },
    {
        displayName: 'HTML',
        name: 'html',
        type: 'string',
        required: false,
        default: '',
        displayOptions: {
            show: {
                operation: ['ai-scrape'],
            },
        },
        description: 'HTML content to scrape. Either url or html is required, but not both.',
    },
    {
        displayName: 'Element Prompts',
        name: 'element_prompts',
        type: 'string',
        typeOptions: {
            multipleValues: true,
            multipleValueButtonText: 'Add Element Prompt',
        },
        required: true,
        default: [],
        displayOptions: {
            show: {
                operation: ['ai-scrape'],
            },
        },
        description: 'Array of element prompts to extract from the page (e.g., "titles", "points", "prices", etc.)',
    },
    {
        displayName: 'Root Element Selector',
        name: 'root_element_selector',
        type: 'string',
        required: false,
        default: 'main',
        displayOptions: {
            show: {
                operation: ['ai-scrape'],
            },
        },
        description: 'CSS selector to limit the scope of scraping to a specific element and its children',
    },
    {
        displayName: 'Page Position',
        name: 'page_position',
        type: 'number',
        required: false,
        default: 1,
        displayOptions: {
            show: {
                operation: ['ai-scrape'],
            },
        },
        description: 'For pagination, the current page number (minimum: 1)',
    },
    {
        displayName: 'Advance Config',
        name: 'advance_config',
        type: 'json',
        default: '',
        displayOptions: {
            show: {
                operation: ['ai-scrape'],
            },
        },
        description: 'Advanced configuration options for the scraper (console, network, cookies, http_headers, reject_request_pattern, goto_options)',
    },
    {
        displayName: 'Http Headers',
        name: 'http_headers',
        type: 'json',
        required: false,
        default: '',
        displayOptions: {
            show: {
                operation: ['ai-scrape'],
            },
        },
        description: 'Custom HTTP headers to send with requests (key-value pairs)',
    },
    {
        displayName: 'Reject Request Pattern',
        name: 'reject_request_pattern',
        type: 'string',
        typeOptions: {
            multipleValues: true,
            multipleValueButtonText: 'Add Reject Request Pattern',
        },
        required: false,
        default: [],
        displayOptions: {
            show: {
                operation: ['ai-scrape'],
            },
        },
        description: 'Array of patterns to intercept and block requests (e.g., [“jpg”, “png”])',
    },
    {
        displayName: 'Goto Options',
        name: 'goto_options',
        type: 'json',
        required: false,
        default: '',
        displayOptions: {
            show: {
                operation: ['ai-scrape'],
            },
        },
        description: 'Custom page-load behavior setting',
    },
    {
        displayName: 'Wait For',
        name: 'wait_for',
        type: 'json',
        required: false,
        default: '',
        displayOptions: {
            show: {
                operation: ['ai-scrape'],
            },
        },
        description: 'Wait condition before scraping (mode: timeout/selector/function, value: timeout in ms/selector string/function string)',
    },
    {
        displayName: 'Cookies',
        name: 'cookies',
        type: 'json',
        required: false,
        default: '',
        displayOptions: {
            show: {
                operation: ['ai-scrape'],
            },
        },
        description: 'Cookies to set for the page request',
    },
    {
        displayName: 'Size Preset',
        name: 'size_preset',
        type: 'string',
        required: false,
        default: '',
        displayOptions: {
            show: {
                operation: ['ai-scrape'],
            },
        },
        description: 'Predefined screen size preset (e.g., "HD", "FHD", "4K UHD")',
    },
    {
        displayName: 'Is Mobile',
        name: 'is_mobile',
        type: 'boolean',
        required: false,
        default: false,
        displayOptions: {
            show: {
                operation: ['ai-scrape'],
            },
        },
        description: 'Whether to emulate a mobile device viewport',
    },
    {
        displayName: 'Scale',
        name: 'scale',
        type: 'number',
        required: false,
        default: 1,
        displayOptions: {
            show: {
                operation: ['ai-scrape'],
            },
        },
        description: 'Device scale factor (minimum: 1)',
    },
    {
        displayName: 'Width',
        name: 'width',
        type: 'number',
        required: false,
        default: 1920,
        displayOptions: {
            show: {
                operation: ['ai-scrape'],
            },
        },
        description: 'Viewport width in pixels',
    },
    {
        displayName: 'Height',
        name: 'height',
        type: 'number',
        required: false,
        default: 1080,
        displayOptions: {
            show: {
                operation: ['ai-scrape'],
            },
        },
        description: 'Viewport height in pixels',
    },
    {
        displayName: 'Force Rotate Proxy',
        name: 'force_rotate_proxy',
        type: 'boolean',
        required: false,
        default: false,
        displayOptions: {
            show: {
                operation: ['ai-scrape'],
            },
        },
        description: 'Whether to force proxy rotation for each request (incurs additional costs)',
    },
    {
        displayName: 'BYO Proxy',
        name: 'byo_proxy',
        type: 'json',
        required: false,
        default: '',
        displayOptions: {
            show: {
                operation: ['ai-scrape'],
            },
        },
        description: 'Bring-your-own-proxy configuration (server URL and optional auth credentials)',
    },
];

async function returnResponse<PostReceiveAction>(
    this: IExecuteSingleFunctions,
    items: INodeExecutionData[],
    responseData: IN8nHttpFullResponse,
): Promise<INodeExecutionData[]> {
    return items.map(() => ({ json: responseData.body }));
}