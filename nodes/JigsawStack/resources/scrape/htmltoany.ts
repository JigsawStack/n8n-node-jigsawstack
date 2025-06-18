import {
    INodeProperties,
} from 'n8n-workflow';
import { returnResponse } from '../../utils';

export const HtmlToAny: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: {
            show: {
                resource: ['html-to-any'],
            },
        },
        noDataExpression: true,
        options: [
            {
                name: 'HTML to Any',
                value: 'html-to-any',
                action: 'Convert HTML/URL to image or PDF',
                description: 'Capture screenshots of a website, convert HTML to both image and PDF formats',
                routing: {
                    request: {
                        method: 'POST',
                        url: '={{"/web/html_to_any"}}',
                        body: {
                            html: '={{$parameter.html && $parameter.html !== "" ? $parameter.html : undefined}}',
                            url: '={{$parameter.url && $parameter.url !== "" ? $parameter.url : undefined}}',
                            type: '={{$parameter.type}}',
                            return_type: '={{$parameter.return_type}}',
                            quality: '={{$parameter.quality && $parameter.quality > 0 ? $parameter.quality : undefined}}',
                            full_page: '={{$parameter.full_page !== undefined ? $parameter.full_page : undefined}}',
                            omit_background: '={{$parameter.omit_background !== undefined ? $parameter.omit_background : undefined}}',
                            width: '={{$parameter.width && $parameter.width > 0 ? $parameter.width : undefined}}',
                            height: '={{$parameter.height && $parameter.height > 0 ? $parameter.height : undefined}}',
                            scale: '={{$parameter.scale && $parameter.scale >= 1 ? $parameter.scale : undefined}}',
                            size_preset: '={{$parameter.size_preset && $parameter.size_preset !== "" ? $parameter.size_preset : undefined}}',
                            is_mobile: '={{$parameter.is_mobile !== undefined ? $parameter.is_mobile : undefined}}',
                            dark_mode: '={{$parameter.dark_mode !== undefined ? $parameter.dark_mode : undefined}}',
                            use_graphic_renderer: '={{$parameter.use_graphic_renderer !== undefined ? $parameter.use_graphic_renderer : undefined}}',
                            goto_options: '={{$parameter.goto_options && $parameter.goto_options !== "" ? JSON.parse($parameter.goto_options) : undefined}}',
                            pdf_display_header_footer: '={{$parameter.pdf_display_header_footer !== undefined ? $parameter.pdf_display_header_footer : undefined}}',
                            pdf_print_background: '={{$parameter.pdf_print_background !== undefined ? $parameter.pdf_print_background : undefined}}',
                            pdf_page_range: '={{$parameter.pdf_page_range && $parameter.pdf_page_range !== "" ? $parameter.pdf_page_range : undefined}}',
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
        default: 'html-to-any',
    },
    {
        displayName: 'Content Source',
        name: 'contentSource',
        type: 'options',
        required: true,
        default: 'url',
        displayOptions: {
            show: {
                operation: ['html-to-any'],
            },
        },
        options: [
            {
                name: 'URL',
                value: 'url',
            },
            {
                name: 'HTML',
                value: 'html',
            },
        ],
        description: 'Choose the source of the content to convert',
    },
    {
        displayName: 'URL',
        name: 'url',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                operation: ['html-to-any'],
                contentSource: ['url'],
            },
        },
        description: 'The URL of the webpage to capture. Either html or URL is required, but not both.',
    },
    {
        displayName: 'HTML',
        name: 'html',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                operation: ['html-to-any'],
                contentSource: ['html'],
            },
        },
        description: 'The HTML content to convert to image or PDF. Either html or URL is required, but not both.',
    },
    {
        displayName: 'Output Type',
        name: 'type',
        type: 'options',
        required: true,
        default: 'png',
        displayOptions: {
            show: {
                operation: ['html-to-any'],
            },
        },
        options: [
            {
                name: 'PNG',
                value: 'png',
                description: 'PNG image format',
            },
            {
                name: 'JPEG',
                value: 'jpeg',
                description: 'JPEG image format',
            },
            {
                name: 'WebP',
                value: 'webp',
                description: 'WebP image format',
            },
            {
                name: 'PDF',
                value: 'pdf',
                description: 'PDF document',
            },
        ],
        description: 'The output file format',
    },
    {
        displayName: 'Quality',
        name: 'quality',
        type: 'number',
        default: 75,
        displayOptions: {
            show: {
                operation: ['html-to-any'],
                type: ['jpeg', 'webp'],
            },
        },
        description: 'The quality of the output image (1-100). Higher values produce better quality but larger file sizes. Only applies to jpeg and webp formats.',
    },
    {
        displayName: 'Full Page',
        name: 'full_page',
        type: 'boolean',
        default: false,
        displayOptions: {
            show: {
                operation: ['html-to-any'],
            },
        },
        description: 'Whether to capture the entire scrollable area of the page instead of just the viewport',
    },
    {
        displayName: 'Omit Background',
        name: 'omit_background',
        type: 'boolean',
        default: false,
        displayOptions: {
            show: {
                operation: ['html-to-any'],
                type: ['png'],
            },
        },
        description: 'Whether to make the background transparent for PNG format images',
    },
    {
        displayName: 'Width',
        name: 'width',
        type: 'number',
        default: 1920,
        displayOptions: {
            show: {
                operation: ['html-to-any'],
            },
        },
        description: 'The width of the viewport in pixels',
    },
    {
        displayName: 'Height',
        name: 'height',
        type: 'number',
        default: 1080,
        displayOptions: {
            show: {
                operation: ['html-to-any'],
            },
        },
        description: 'The height of the viewport in pixels',
    },
    {
        displayName: 'Scale',
        name: 'scale',
        type: 'number',
        default: 1,
        displayOptions: {
            show: {
                operation: ['html-to-any'],
            },
        },
        description: 'Device scale factor (minimum: 1). Controls the resolution of the screenshot.',
    },
    {
        displayName: 'Size Preset',
        name: 'size_preset',
        type: 'options',
        default: 'QVGA',
        displayOptions: {
            show: {
                operation: ['html-to-any'],
            },
        },
        options: [
            { name: '2K', value: '2K', description: '2048×1080' },
            { name: '2K QHD', value: '2K QHD', description: '2560×1440' },
            { name: '4K UHD', value: '4K UHD', description: '3840×2160' },
            { name: '5K', value: '5K', description: '5120×2880' },
            { name: 'FHD', value: 'FHD', description: '1920×1080' },
            { name: 'HD', value: 'HD', description: '1280×720' },
            { name: 'HD+', value: 'HD+', description: '1600×900' },
            { name: 'QVGA', value: 'QVGA', description: '320×240' },
            { name: 'SVGA', value: 'SVGA', description: '800×600' },
            { name: 'SXGA', value: 'SXGA', description: '1280×1024' },
            { name: 'VGA', value: 'VGA', description: '640×480' },
        ],
        description: 'Predefined screen size preset to use instead of specifying width and height manually',
    },
    {
        displayName: 'Is Mobile',
        name: 'is_mobile',
        type: 'boolean',
        default: false,
        displayOptions: {
            show: {
                operation: ['html-to-any'],
            },
        },
        description: 'Whether to emulate a mobile device viewport and take the meta viewport tag into account',
    },
    {
        displayName: 'Dark Mode',
        name: 'dark_mode',
        type: 'boolean',
        default: false,
        displayOptions: {
            show: {
                operation: ['html-to-any'],
            },
        },
        description: 'Whether to force the page to render in dark mode using the CSS prefers-color-scheme media feature',
    },
    {
        displayName: 'Use Graphic Renderer',
        name: 'use_graphic_renderer',
        type: 'boolean',
        default: false,
        displayOptions: {
            show: {
                operation: ['html-to-any'],
            },
        },
        description: 'Whether to enable WebGL, GPU acceleration, and other 3D APIs. Note: This option may impact performance and increase API latency.',
    },
    {
        displayName: 'Goto Options',
        name: 'goto_options',
        type: 'json',
        default: '',
        displayOptions: {
            show: {
                operation: ['html-to-any'],
            },
        },
        description: 'Custom page-load behavior settings (timeout, wait_until). Example: {"timeout": 15000, "wait_until": "networkidle0"}.',
    },
    {
        displayName: 'PDF Display Header Footer',
        name: 'pdf_display_header_footer',
        type: 'boolean',
        default: false,
        displayOptions: {
            show: {
                operation: ['html-to-any'],
                type: ['pdf'],
            },
        },
        description: 'Whether to display header and footer in PDF output. Only applies when type is set to pdf.',
    },
    {
        displayName: 'PDF Print Background',
        name: 'pdf_print_background',
        type: 'boolean',
        default: false,
        displayOptions: {
            show: {
                operation: ['html-to-any'],
                type: ['pdf'],
            },
        },
        description: 'Whether to print background graphics in PDF output. Only applies when type is set to pdf.',
    },
    {
        displayName: 'PDF Page Range',
        name: 'pdf_page_range',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                operation: ['html-to-any'],
                type: ['pdf'],
            },
        },
        description: 'Page ranges to print in PDF format (e.g., "1-5, 8, 11-13"). Only applies when type is set to pdf.',
    },
    {
        displayName: "Return Type",
        name: "return_type",
        type: "options",
        default: "url",
        displayOptions: {
            show: {
                operation: ['html-to-any'],
            },
        },
        options: [
            {
                name: 'Base64',
                value: "base64",
            },
            {
                name: 'Url',
                value: "url",
            },
            {
                name: 'Binary',
                value: "binary",
            },
        ],
        description: 'Return format for the image or PDF',
    },
];
