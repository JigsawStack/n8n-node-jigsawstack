import {
    INodeProperties,
    IExecuteSingleFunctions,
    INodeExecutionData,
    IN8nHttpFullResponse,
} from 'n8n-workflow';
import { Buffer } from 'buffer';

export const TTS: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: {
            show: {
                resource: ['text-to-speech'],
            },
        },
        noDataExpression: true,
        options: [
            {
                name: 'Text to Speech',
                value: 'text-to-speech',
                action: 'Convert text to speech',
                description: 'Transform text into natural-sounding human-like AI voices',
                routing: {
                    request: {
                        method: 'POST',
                        url: '={{"/ai/tts"}}',
                        body: {
                            text: '={{$parameter.text}}',
                            accent: '={{$parameter.accent === "other" ? $parameter.accent_custom : $parameter.accent}}',
                            speaker_clone_url: '={{$parameter.speaker_clone_url}}',
                            speaker_clone_file_store_key: '={{$parameter.speaker_clone_file_store_key}}',
                            voice_id: '={{$parameter.voice_id}}',
                        },
                    },
                    output: {
                        postReceive: [
                            returnTTSBinary,
                        ],
                    },
                },
            },
        ],
        default: 'text-to-speech',
    },
    {
        displayName: 'Text',
        name: 'text',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                operation: ['text-to-speech'],
            },
        },
        description: 'The text to convert to speech',
    },
    {
        displayName: 'Accent',
        name: 'accent',
        type: 'options',
        options: [
            {
                "name": "af-ZA-female-1",
                "value": "af-ZA-female-1",
                "description": "Afrikaans (South Africa)"
            },
            {
                "name": "af-ZA-male-1",
                "value": "af-ZA-male-1",
                "description": "Afrikaans (South Africa)"
            },
            {
                "name": "am-ET-female-1",
                "value": "am-ET-female-1",
                "description": "Amharic (Ethiopia)"
            },
            {
                "name": "am-ET-male-1",
                "value": "am-ET-male-1",
                "description": "Amharic (Ethiopia)"
            },
            {
                "name": "ar-AE-female-1",
                "value": "ar-AE-female-1",
                "description": "Arabic (United Arab Emirates)"
            },
            {
                "name": "ar-AE-male-1",
                "value": "ar-AE-male-1",
                "description": "Arabic (United Arab Emirates)"
            },
            {
                "name": "ar-BH-female-1",
                "value": "ar-BH-female-1",
                "description": "Arabic (Bahrain)"
            },
            {
                "name": "ar-BH-male-1",
                "value": "ar-BH-male-1",
                "description": "Arabic (Bahrain)"
            },
            {
                "name": "ar-DZ-female-1",
                "value": "ar-DZ-female-1",
                "description": "Arabic (Algeria)"
            },
            {
                "name": "ar-DZ-male-1",
                "value": "ar-DZ-male-1",
                "description": "Arabic (Algeria)"
            },
            {
                "name": "ar-EG-female-1",
                "value": "ar-EG-female-1",
                "description": "Arabic (Egypt)"
            },
            {
                "name": "ar-EG-male-1",
                "value": "ar-EG-male-1",
                "description": "Arabic (Egypt)"
            },
            {
                "name": "ar-IQ-female-1",
                "value": "ar-IQ-female-1",
                "description": "Arabic (Iraq)"
            },
            {
                "name": "ar-IQ-male-1",
                "value": "ar-IQ-male-1",
                "description": "Arabic (Iraq)"
            },
            {
                "name": "ar-JO-female-1",
                "value": "ar-JO-female-1",
                "description": "Arabic (Jordan)"
            },
            {
                "name": "ar-JO-male-1",
                "value": "ar-JO-male-1",
                "description": "Arabic (Jordan)"
            },
            {
                "name": "ar-KW-female-1",
                "value": "ar-KW-female-1",
                "description": "Arabic (Kuwait)"
            },
            {
                "name": "ar-KW-male-1",
                "value": "ar-KW-male-1",
                "description": "Arabic (Kuwait)"
            },
            {
                "name": "ar-LB-female-1",
                "value": "ar-LB-female-1",
                "description": "Arabic (Lebanon)"
            },
            {
                "name": "ar-LB-male-1",
                "value": "ar-LB-male-1",
                "description": "Arabic (Lebanon)"
            },
            {
                "name": "ar-LY-female-1",
                "value": "ar-LY-female-1",
                "description": "Arabic (Libya)"
            },
            {
                "name": "ar-LY-male-1",
                "value": "ar-LY-male-1",
                "description": "Arabic (Libya)"
            },
            {
                "name": "ar-MA-female-1",
                "value": "ar-MA-female-1",
                "description": "Arabic (Morocco)"
            },
            {
                "name": "ar-MA-male-1",
                "value": "ar-MA-male-1",
                "description": "Arabic (Morocco)"
            },
            {
                "name": "ar-OM-female-1",
                "value": "ar-OM-female-1",
                "description": "Arabic (Oman)"
            },
            {
                "name": "ar-OM-male-1",
                "value": "ar-OM-male-1",
                "description": "Arabic (Oman)"
            },
            {
                "name": "ar-QA-female-1",
                "value": "ar-QA-female-1",
                "description": "Arabic (Qatar)"
            },
            {
                "name": "ar-QA-male-1",
                "value": "ar-QA-male-1",
                "description": "Arabic (Qatar)"
            },
            {
                "name": "ar-SA-female-1",
                "value": "ar-SA-female-1",
                "description": "Arabic (Saudi Arabia)"
            },
            {
                "name": "ar-SA-male-1",
                "value": "ar-SA-male-1",
                "description": "Arabic (Saudi Arabia)"
            },
            {
                "name": "ar-SY-female-1",
                "value": "ar-SY-female-1",
                "description": "Arabic (Syria)"
            },
            {
                "name": "ar-SY-male-1",
                "value": "ar-SY-male-1",
                "description": "Arabic (Syria)"
            },
            {
                "name": "ar-TN-female-1",
                "value": "ar-TN-female-1",
                "description": "Arabic (Tunisia)"
            },
            {
                "name": "ar-TN-male-1",
                "value": "ar-TN-male-1",
                "description": "Arabic (Tunisia)"
            },
            {
                "name": "ar-YE-female-1",
                "value": "ar-YE-female-1",
                "description": "Arabic (Yemen)"
            },
            {
                "name": "ar-YE-male-1",
                "value": "ar-YE-male-1",
                "description": "Arabic (Yemen)"
            },
            {
                "name": "as-IN-male-1",
                "value": "as-IN-male-1",
                "description": "Assamese (India)"
            },
            {
                "name": "as-IN-female-1",
                "value": "as-IN-female-1",
                "description": "Assamese (India)"
            },
            {
                "name": "az-AZ-female-1",
                "value": "az-AZ-female-1",
                "description": "Azerbaijani (Latin, Azerbaijan)"
            },
            {
                "name": "az-AZ-male-1",
                "value": "az-AZ-male-1",
                "description": "Azerbaijani (Latin, Azerbaijan)"
            },
            {
                "name": "bg-BG-female-1",
                "value": "bg-BG-female-1",
                "description": "Bulgarian (Bulgaria)"
            },
            {
                "name": "bg-BG-male-1",
                "value": "bg-BG-male-1",
                "description": "Bulgarian (Bulgaria)"
            },
            {
                "name": "bn-BD-female-1",
                "value": "bn-BD-female-1",
                "description": "Bangla (Bangladesh)"
            },
            {
                "name": "bn-BD-male-1",
                "value": "bn-BD-male-1",
                "description": "Bangla (Bangladesh)"
            },
            {
                "name": "bn-IN-female-1",
                "value": "bn-IN-female-1",
                "description": "Bengali (India)"
            },
            {
                "name": "bn-IN-male-1",
                "value": "bn-IN-male-1",
                "description": "Bengali (India)"
            },
            {
                "name": "bs-BA-female-1",
                "value": "bs-BA-female-1",
                "description": "Bosnian (Bosnia and Herzegovina)"
            },
            {
                "name": "bs-BA-male-1",
                "value": "bs-BA-male-1",
                "description": "Bosnian (Bosnia and Herzegovina)"
            },
            {
                "name": "ca-ES-female-1",
                "value": "ca-ES-female-1",
                "description": "Catalan (Spain)"
            },
            {
                "name": "ca-ES-male-1",
                "value": "ca-ES-male-1",
                "description": "Catalan (Spain)"
            },
            {
                "name": "ca-ES-female-2",
                "value": "ca-ES-female-2",
                "description": "Catalan (Spain)"
            },
            {
                "name": "cs-CZ-female-1",
                "value": "cs-CZ-female-1",
                "description": "Czech (Czechia)"
            },
            {
                "name": "cs-CZ-male-1",
                "value": "cs-CZ-male-1",
                "description": "Czech (Czechia)"
            },
            {
                "name": "cy-GB-female-1",
                "value": "cy-GB-female-1",
                "description": "Welsh (United Kingdom)"
            },
            {
                "name": "cy-GB-male-1",
                "value": "cy-GB-male-1",
                "description": "Welsh (United Kingdom)"
            },
            {
                "name": "da-DK-female-1",
                "value": "da-DK-female-1",
                "description": "Danish (Denmark)"
            },
            {
                "name": "da-DK-male-1",
                "value": "da-DK-male-1",
                "description": "Danish (Denmark)"
            },
            {
                "name": "de-AT-female-1",
                "value": "de-AT-female-1",
                "description": "German (Austria)"
            },
            {
                "name": "de-AT-male-1",
                "value": "de-AT-male-1",
                "description": "German (Austria)"
            },
            {
                "name": "de-CH-female-1",
                "value": "de-CH-female-1",
                "description": "German (Switzerland)"
            },
            {
                "name": "de-CH-male-1",
                "value": "de-CH-male-1",
                "description": "German (Switzerland)"
            },
            {
                "name": "de-DE-female-1",
                "value": "de-DE-female-1",
                "description": "German (Germany)"
            },
            {
                "name": "de-DE-male-1",
                "value": "de-DE-male-1",
                "description": "German (Germany)"
            },
            {
                "name": "de-DE-female-2",
                "value": "de-DE-female-2",
                "description": "German (Germany)"
            },
            {
                "name": "de-DE-male-2",
                "value": "de-DE-male-2",
                "description": "German (Germany)"
            },
            {
                "name": "de-DE-male-3",
                "value": "de-DE-male-3",
                "description": "German (Germany)"
            },
            {
                "name": "de-DE-female-3",
                "value": "de-DE-female-3",
                "description": "German (Germany)"
            },
            {
                "name": "de-DE-male-4",
                "value": "de-DE-male-4",
                "description": "German (Germany)"
            },
            {
                "name": "de-DE-male-5",
                "value": "de-DE-male-5",
                "description": "German (Germany)"
            },
            {
                "name": "de-DE-female-4",
                "value": "de-DE-female-4",
                "description": "German (Germany)"
            },
            {
                "name": "de-DE-male-6",
                "value": "de-DE-male-6",
                "description": "German (Germany)"
            },
            {
                "name": "de-DE-male-7",
                "value": "de-DE-male-7",
                "description": "German (Germany)"
            },
            {
                "name": "de-DE-female-5",
                "value": "de-DE-female-5",
                "description": "German (Germany)"
            },
            {
                "name": "de-DE-male-8",
                "value": "de-DE-male-8",
                "description": "German (Germany)"
            },
            {
                "name": "de-DE-female-6",
                "value": "de-DE-female-6",
                "description": "German (Germany)"
            },
            {
                "name": "de-DE-female-7",
                "value": "de-DE-female-7",
                "description": "German (Germany)"
            },
            {
                "name": "de-DE-male-9",
                "value": "de-DE-male-9",
                "description": "German (Germany)"
            },
            {
                "name": "de-DE-female-8",
                "value": "de-DE-female-8",
                "description": "German (Germany)"
            },
            {
                "name": "de-DE-female-9",
                "value": "de-DE-female-9",
                "description": "German (Germany)"
            },
            {
                "name": "de-DE-female-10",
                "value": "de-DE-female-10",
                "description": "German (Germany)"
            },
            {
                "name": "el-GR-female-2",
                "value": "el-GR-female-2",
                "description": "Greek (Greece)"
            },
            {
                "name": "el-GR-male-2",
                "value": "el-GR-male-2",
                "description": "Greek (Greece)"
            },
            {
                "name": "en-AU-female-2",
                "value": "en-AU-female-2",
                "description": "English (Australia)"
            },
            {
                "name": "en-AU-male-2",
                "value": "en-AU-male-2",
                "description": "English (Australia)"
            },
            {
                "name": "en-AU-female-3",
                "value": "en-AU-female-3",
                "description": "English (Australia)"
            },
            {
                "name": "en-AU-female-4",
                "value": "en-AU-female-4",
                "description": "English (Australia)"
            },
            {
                "name": "en-AU-male-3",
                "value": "en-AU-male-3",
                "description": "English (Australia)"
            },
            {
                "name": "en-AU-male-4",
                "value": "en-AU-male-4",
                "description": "English (Australia)"
            },
            {
                "name": "en-AU-female-5",
                "value": "en-AU-female-5",
                "description": "English (Australia)"
            },
            {
                "name": "en-AU-female-6",
                "value": "en-AU-female-6",
                "description": "English (Australia)"
            },
            {
                "name": "en-AU-female-7",
                "value": "en-AU-female-7",
                "description": "English (Australia)"
            },
            {
                "name": "en-AU-male-5",
                "value": "en-AU-male-5",
                "description": "English (Australia)"
            },
            {
                "name": "en-AU-female-8",
                "value": "en-AU-female-8",
                "description": "English (Australia)"
            },
            {
                "name": "en-AU-male-6",
                "value": "en-AU-male-6",
                "description": "English (Australia)"
            },
            {
                "name": "en-AU-male-7",
                "value": "en-AU-male-7",
                "description": "English (Australia)"
            },
            {
                "name": "en-AU-female-9",
                "value": "en-AU-female-9",
                "description": "English (Australia)"
            },
            {
                "name": "en-CA-female-2",
                "value": "en-CA-female-2",
                "description": "English (Canada)"
            },
            {
                "name": "en-CA-male-2",
                "value": "en-CA-male-2",
                "description": "English (Canada)"
            },
            {
                "name": "en-GB-female-2",
                "value": "en-GB-female-2",
                "description": "English (United Kingdom)"
            },
            {
                "name": "en-GB-male-2",
                "value": "en-GB-male-2",
                "description": "English (United Kingdom)"
            },
            {
                "name": "en-GB-female-3",
                "value": "en-GB-female-3",
                "description": "English (United Kingdom)"
            },
            {
                "name": "en-GB-female-4",
                "value": "en-GB-female-4",
                "description": "English (United Kingdom)"
            },
            {
                "name": "en-GB-male-3",
                "value": "en-GB-male-3",
                "description": "English (United Kingdom)"
            },
            {
                "name": "en-GB-female-5",
                "value": "en-GB-female-5",
                "description": "English (United Kingdom)"
            },
            {
                "name": "en-GB-male-4",
                "value": "en-GB-male-4",
                "description": "English (United Kingdom)"
            },
            {
                "name": "en-GB-male-5",
                "value": "en-GB-male-5",
                "description": "English (United Kingdom)"
            },
            {
                "name": "en-GB-female-6",
                "value": "en-GB-female-6",
                "description": "English (United Kingdom)"
            },
            {
                "name": "en-GB-female-7",
                "value": "en-GB-female-7",
                "description": "English (United Kingdom)"
            },
            {
                "name": "en-GB-male-6",
                "value": "en-GB-male-6",
                "description": "English (United Kingdom)"
            },
            {
                "name": "en-GB-male-7",
                "value": "en-GB-male-7",
                "description": "English (United Kingdom)"
            },
            {
                "name": "en-GB-female-8",
                "value": "en-GB-female-8",
                "description": "English (United Kingdom)"
            },
            {
                "name": "en-GB-male-8",
                "value": "en-GB-male-8",
                "description": "English (United Kingdom)"
            },
            {
                "name": "en-GB-female-9",
                "value": "en-GB-female-9",
                "description": "English (United Kingdom)"
            },
            {
                "name": "en-GB-female-10",
                "value": "en-GB-female-10",
                "description": "English (United Kingdom)"
            },
            {
                "name": "en-GB-male-9",
                "value": "en-GB-male-9",
                "description": "English (United Kingdom)"
            },
            {
                "name": "en-GB-male-10",
                "value": "en-GB-male-10",
                "description": "English (United Kingdom)"
            },
            {
                "name": "en-GB-female-11",
                "value": "en-GB-female-11",
                "description": "English (United Kingdom)"
            },
            {
                "name": "en-HK-female-1",
                "value": "en-HK-female-1",
                "description": "English (Hong Kong SAR)"
            },
            {
                "name": "en-HK-male-1",
                "value": "en-HK-male-1",
                "description": "English (Hong Kong SAR)"
            },
            {
                "name": "en-IE-female-3",
                "value": "en-IE-female-3",
                "description": "English (Ireland)"
            },
            {
                "name": "en-IE-male-3",
                "value": "en-IE-male-3",
                "description": "English (Ireland)"
            },
            {
                "name": "en-IN-female-3",
                "value": "en-IN-female-3",
                "description": "English (India)"
            },
            {
                "name": "en-IN-male-3",
                "value": "en-IN-male-3",
                "description": "English (India)"
            },
            {
                "name": "en-IN-male-4",
                "value": "en-IN-male-4",
                "description": "English (India)"
            },
            {
                "name": "en-IN-female-4",
                "value": "en-IN-female-4",
                "description": "English (India)"
            },
            {
                "name": "en-IN-female-5",
                "value": "en-IN-female-5",
                "description": "English (India)"
            },
            {
                "name": "en-IN-female-6",
                "value": "en-IN-female-6",
                "description": "English (India)"
            },
            {
                "name": "en-IN-male-5",
                "value": "en-IN-male-5",
                "description": "English (India)"
            },
            {
                "name": "en-IN-male-6",
                "value": "en-IN-male-6",
                "description": "English (India)"
            },
            {
                "name": "en-KE-female-1",
                "value": "en-KE-female-1",
                "description": "English (Kenya)"
            },
            {
                "name": "en-KE-male-1",
                "value": "en-KE-male-1",
                "description": "English (Kenya)"
            },
            {
                "name": "en-NG-female-1",
                "value": "en-NG-female-1",
                "description": "English (Nigeria)"
            },
            {
                "name": "en-NG-male-1",
                "value": "en-NG-male-1",
                "description": "English (Nigeria)"
            },
            {
                "name": "en-NZ-female-1",
                "value": "en-NZ-female-1",
                "description": "English (New Zealand)"
            },
            {
                "name": "en-NZ-male-1",
                "value": "en-NZ-male-1",
                "description": "English (New Zealand)"
            },
            {
                "name": "en-PH-female-1",
                "value": "en-PH-female-1",
                "description": "English (Philippines)"
            },
            {
                "name": "en-PH-male-1",
                "value": "en-PH-male-1",
                "description": "English (Philippines)"
            },
            {
                "name": "en-SG-female-1",
                "value": "en-SG-female-1",
                "description": "English (Singapore)"
            },
            {
                "name": "en-SG-male-1",
                "value": "en-SG-male-1",
                "description": "English (Singapore)"
            },
            {
                "name": "en-TZ-female-1",
                "value": "en-TZ-female-1",
                "description": "English (Tanzania)"
            },
            {
                "name": "en-TZ-male-1",
                "value": "en-TZ-male-1",
                "description": "English (Tanzania)"
            },
            {
                "name": "en-US-female-3",
                "value": "en-US-female-3",
                "description": "English (United States)"
            },
            {
                "name": "en-US-female-4",
                "value": "en-US-female-4",
                "description": "English (United States)"
            },
            {
                "name": "en-US-male-3",
                "value": "en-US-male-3",
                "description": "English (United States)"
            },
            {
                "name": "en-US-male-4",
                "value": "en-US-male-4",
                "description": "English (United States)"
            },
            {
                "name": "en-US-female-5",
                "value": "en-US-female-5",
                "description": "English (United States)"
            },
            {
                "name": "en-US-female-6",
                "value": "en-US-female-6",
                "description": "English (United States)"
            },
            {
                "name": "en-US-male-5",
                "value": "en-US-male-5",
                "description": "English (United States)"
            },
            {
                "name": "en-US-male-6",
                "value": "en-US-male-6",
                "description": "English (United States)"
            },
            {
                "name": "en-US-female-7",
                "value": "en-US-female-7",
                "description": "English (United States)"
            },
            {
                "name": "en-US-male-7",
                "value": "en-US-male-7",
                "description": "English (United States)"
            },
            {
                "name": "en-US-female-8",
                "value": "en-US-female-8",
                "description": "English (United States)"
            },
            {
                "name": "en-US-male-8",
                "value": "en-US-male-8",
                "description": "English (United States)"
            },
            {
                "name": "en-US-female-9",
                "value": "en-US-female-9",
                "description": "English (United States)"
            },
            {
                "name": "en-US-male-9",
                "value": "en-US-male-9",
                "description": "English (United States)"
            },
            {
                "name": "en-US-female-10",
                "value": "en-US-female-10",
                "description": "English (United States)"
            },
            {
                "name": "en-US-male-10",
                "value": "en-US-male-10",
                "description": "English (United States)"
            },
            {
                "name": "en-US-female-11",
                "value": "en-US-female-11",
                "description": "English (United States)"
            },
            {
                "name": "en-US-male-11",
                "value": "en-US-male-11",
                "description": "English (United States)"
            },
            {
                "name": "en-US-female-12",
                "value": "en-US-female-12",
                "description": "English (United States)"
            },
            {
                "name": "en-US-male-12",
                "value": "en-US-male-12",
                "description": "English (United States)"
            },
            {
                "name": "en-US-female-13",
                "value": "en-US-female-13",
                "description": "English (United States)"
            },
            {
                "name": "en-US-female-14",
                "value": "en-US-female-14",
                "description": "English (United States)"
            },
            {
                "name": "en-US-female-15",
                "value": "en-US-female-15",
                "description": "English (United States)"
            },
            {
                "name": "en-US-female-16",
                "value": "en-US-female-16",
                "description": "English (United States)"
            },
            {
                "name": "en-US-male-13",
                "value": "en-US-male-13",
                "description": "English (United States)"
            },
            {
                "name": "en-US-male-14",
                "value": "en-US-male-14",
                "description": "English (United States)"
            },
            {
                "name": "en-US-female-17",
                "value": "en-US-female-17",
                "description": "English (United States)"
            },
            {
                "name": "en-US-female-18",
                "value": "en-US-female-18",
                "description": "English (United States)"
            },
            {
                "name": "en-US-male-15",
                "value": "en-US-male-15",
                "description": "English (United States)"
            },
            {
                "name": "en-US-male-16",
                "value": "en-US-male-16",
                "description": "English (United States)"
            },
            {
                "name": "en-US-female-19",
                "value": "en-US-female-19",
                "description": "English (United States)"
            },
            {
                "name": "en-US-female-20",
                "value": "en-US-female-20",
                "description": "English (United States)"
            },
            {
                "name": "en-US-female-21",
                "value": "en-US-female-21",
                "description": "English (United States)"
            },
            {
                "name": "en-US-female-22",
                "value": "en-US-female-22",
                "description": "English (United States)"
            },
            {
                "name": "en-US-male-17",
                "value": "en-US-male-17",
                "description": "English (United States)"
            },
            {
                "name": "en-US-male-18",
                "value": "en-US-male-18",
                "description": "English (United States)"
            },
            {
                "name": "en-US-male-19",
                "value": "en-US-male-19",
                "description": "English (United States)"
            },
            {
                "name": "en-US-male-20",
                "value": "en-US-male-20",
                "description": "English (United States)"
            },
            {
                "name": "en-US-male-21",
                "value": "en-US-male-21",
                "description": "English (United States)"
            },
            {
                "name": "en-US-female-23",
                "value": "en-US-female-23",
                "description": "English (United States)"
            },
            {
                "name": "en-US-male-22",
                "value": "en-US-male-22",
                "description": "English (United States)"
            },
            {
                "name": "en-US-male-23",
                "value": "en-US-male-23",
                "description": "English (United States)"
            },
            {
                "name": "en-US-neutral-1",
                "value": "en-US-neutral-1",
                "description": "English (United States)"
            },
            {
                "name": "en-US-male-24",
                "value": "en-US-male-24",
                "description": "English (United States)"
            },
            {
                "name": "en-US-male-25",
                "value": "en-US-male-25",
                "description": "English (United States)"
            },
            {
                "name": "en-US-male-26",
                "value": "en-US-male-26",
                "description": "English (United States)"
            },
            {
                "name": "en-US-male-27",
                "value": "en-US-male-27",
                "description": "English (United States)"
            },
            {
                "name": "en-US-female-24",
                "value": "en-US-female-24",
                "description": "English (United States)"
            },
            {
                "name": "en-US-female-25",
                "value": "en-US-female-25",
                "description": "English (United States)"
            },
            {
                "name": "en-US-female-26",
                "value": "en-US-female-26",
                "description": "English (United States)"
            },
            {
                "name": "en-US-female-27",
                "value": "en-US-female-27",
                "description": "English (United States)"
            },
            {
                "name": "en-US-male-28",
                "value": "en-US-male-28",
                "description": "English (United States)"
            },
            {
                "name": "en-US-female-28",
                "value": "en-US-female-28",
                "description": "English (United States)"
            },
            {
                "name": "en-US-female-29",
                "value": "en-US-female-29",
                "description": "English (United States)"
            },
            {
                "name": "en-US-female-30",
                "value": "en-US-female-30",
                "description": "English (United States)"
            },
            {
                "name": "en-US-male-29",
                "value": "en-US-male-29",
                "description": "English (United States)"
            },
            {
                "name": "en-US-male-30",
                "value": "en-US-male-30",
                "description": "English (United States)"
            },
            {
                "name": "en-ZA-female-1",
                "value": "en-ZA-female-1",
                "description": "English (South Africa)"
            },
            {
                "name": "en-ZA-male-1",
                "value": "en-ZA-male-1",
                "description": "English (South Africa)"
            },
            {
                "name": "es-AR-female-1",
                "value": "es-AR-female-1",
                "description": "Spanish (Argentina)"
            },
            {
                "name": "es-AR-male-1",
                "value": "es-AR-male-1",
                "description": "Spanish (Argentina)"
            },
            {
                "name": "es-BO-female-1",
                "value": "es-BO-female-1",
                "description": "Spanish (Bolivia)"
            },
            {
                "name": "es-BO-male-1",
                "value": "es-BO-male-1",
                "description": "Spanish (Bolivia)"
            },
            {
                "name": "es-CL-female-1",
                "value": "es-CL-female-1",
                "description": "Spanish (Chile)"
            },
            {
                "name": "es-CL-male-1",
                "value": "es-CL-male-1",
                "description": "Spanish (Chile)"
            },
            {
                "name": "es-CO-female-1",
                "value": "es-CO-female-1",
                "description": "Spanish (Colombia)"
            },
            {
                "name": "es-CO-male-1",
                "value": "es-CO-male-1",
                "description": "Spanish (Colombia)"
            },
            {
                "name": "es-CR-female-1",
                "value": "es-CR-female-1",
                "description": "Spanish (Costa Rica)"
            },
            {
                "name": "es-CR-male-1",
                "value": "es-CR-male-1",
                "description": "Spanish (Costa Rica)"
            },
            {
                "name": "es-CU-female-1",
                "value": "es-CU-female-1",
                "description": "Spanish (Cuba)"
            },
            {
                "name": "es-CU-male-1",
                "value": "es-CU-male-1",
                "description": "Spanish (Cuba)"
            },
            {
                "name": "es-DO-female-1",
                "value": "es-DO-female-1",
                "description": "Spanish (Dominican Republic)"
            },
            {
                "name": "es-DO-male-1",
                "value": "es-DO-male-1",
                "description": "Spanish (Dominican Republic)"
            },
            {
                "name": "es-EC-female-1",
                "value": "es-EC-female-1",
                "description": "Spanish (Ecuador)"
            },
            {
                "name": "es-EC-male-1",
                "value": "es-EC-male-1",
                "description": "Spanish (Ecuador)"
            },
            {
                "name": "es-ES-female-9",
                "value": "es-ES-female-9",
                "description": "Spanish (Spain)"
            },
            {
                "name": "es-ES-male-10",
                "value": "es-ES-male-10",
                "description": "Spanish (Spain)"
            },
            {
                "name": "es-ES-female-10",
                "value": "es-ES-female-10",
                "description": "Spanish (Spain)"
            },
            {
                "name": "es-ES-male-11",
                "value": "es-ES-male-11",
                "description": "Spanish (Spain)"
            },
            {
                "name": "es-ES-male-12",
                "value": "es-ES-male-12",
                "description": "Spanish (Spain)"
            },
            {
                "name": "es-ES-male-13",
                "value": "es-ES-male-13",
                "description": "Spanish (Spain)"
            },
            {
                "name": "es-ES-female-11",
                "value": "es-ES-female-11",
                "description": "Spanish (Spain)"
            },
            {
                "name": "es-ES-female-12",
                "value": "es-ES-female-12",
                "description": "Spanish (Spain)"
            },
            {
                "name": "es-ES-female-13",
                "value": "es-ES-female-13",
                "description": "Spanish (Spain)"
            },
            {
                "name": "es-ES-female-14",
                "value": "es-ES-female-14",
                "description": "Spanish (Spain)"
            },
            {
                "name": "es-ES-male-14",
                "value": "es-ES-male-14",
                "description": "Spanish (Spain)"
            },
            {
                "name": "es-ES-male-15",
                "value": "es-ES-male-15",
                "description": "Spanish (Spain)"
            },
            {
                "name": "es-ES-male-16",
                "value": "es-ES-male-16",
                "description": "Spanish (Spain)"
            },
            {
                "name": "es-ES-female-15",
                "value": "es-ES-female-15",
                "description": "Spanish (Spain)"
            },
            {
                "name": "es-ES-female-16",
                "value": "es-ES-female-16",
                "description": "Spanish (Spain)"
            },
            {
                "name": "es-ES-female-17",
                "value": "es-ES-female-17",
                "description": "Spanish (Spain)"
            },
            {
                "name": "es-ES-female-18",
                "value": "es-ES-female-18",
                "description": "Spanish (Spain)"
            },
            {
                "name": "es-ES-female-19",
                "value": "es-ES-female-19",
                "description": "Spanish (Spain)"
            },
            {
                "name": "es-ES-female-20",
                "value": "es-ES-female-20",
                "description": "Spanish (Spain)"
            },
            {
                "name": "es-ES-female-21",
                "value": "es-ES-female-21",
                "description": "Spanish (Spain)"
            },
            {
                "name": "es-ES-male-17",
                "value": "es-ES-male-17",
                "description": "Spanish (Spain)"
            },
            {
                "name": "es-ES-male-18",
                "value": "es-ES-male-18",
                "description": "Spanish (Spain)"
            },
            {
                "name": "es-ES-female-22",
                "value": "es-ES-female-22",
                "description": "Spanish (Spain)"
            },
            {
                "name": "es-ES-female-23",
                "value": "es-ES-female-23",
                "description": "Spanish (Spain)"
            },
            {
                "name": "es-GQ-female-1",
                "value": "es-GQ-female-1",
                "description": "Spanish (Equatorial Guinea)"
            },
            {
                "name": "es-GQ-male-1",
                "value": "es-GQ-male-1",
                "description": "Spanish (Equatorial Guinea)"
            },
            {
                "name": "es-GT-female-1",
                "value": "es-GT-female-1",
                "description": "Spanish (Guatemala)"
            },
            {
                "name": "es-GT-male-1",
                "value": "es-GT-male-1",
                "description": "Spanish (Guatemala)"
            },
            {
                "name": "es-HN-female-1",
                "value": "es-HN-female-1",
                "description": "Spanish (Honduras)"
            },
            {
                "name": "es-HN-male-1",
                "value": "es-HN-male-1",
                "description": "Spanish (Honduras)"
            },
            {
                "name": "es-MX-female-12",
                "value": "es-MX-female-12",
                "description": "Spanish (Mexico)"
            },
            {
                "name": "es-MX-male-11",
                "value": "es-MX-male-11",
                "description": "Spanish (Mexico)"
            },
            {
                "name": "es-MX-female-13",
                "value": "es-MX-female-13",
                "description": "Spanish (Mexico)"
            },
            {
                "name": "es-MX-female-14",
                "value": "es-MX-female-14",
                "description": "Spanish (Mexico)"
            },
            {
                "name": "es-MX-female-15",
                "value": "es-MX-female-15",
                "description": "Spanish (Mexico)"
            },
            {
                "name": "es-MX-male-12",
                "value": "es-MX-male-12",
                "description": "Spanish (Mexico)"
            },
            {
                "name": "es-MX-male-13",
                "value": "es-MX-male-13",
                "description": "Spanish (Mexico)"
            },
            {
                "name": "es-MX-female-16",
                "value": "es-MX-female-16",
                "description": "Spanish (Mexico)"
            },
            {
                "name": "es-MX-male-14",
                "value": "es-MX-male-14",
                "description": "Spanish (Mexico)"
            },
            {
                "name": "es-MX-male-15",
                "value": "es-MX-male-15",
                "description": "Spanish (Mexico)"
            },
            {
                "name": "es-MX-female-17",
                "value": "es-MX-female-17",
                "description": "Spanish (Mexico)"
            },
            {
                "name": "es-MX-female-18",
                "value": "es-MX-female-18",
                "description": "Spanish (Mexico)"
            },
            {
                "name": "es-MX-male-16",
                "value": "es-MX-male-16",
                "description": "Spanish (Mexico)"
            },
            {
                "name": "es-MX-female-19",
                "value": "es-MX-female-19",
                "description": "Spanish (Mexico)"
            },
            {
                "name": "es-MX-male-17",
                "value": "es-MX-male-17",
                "description": "Spanish (Mexico)"
            },
            {
                "name": "es-NI-female-1",
                "value": "es-NI-female-1",
                "description": "Spanish (Nicaragua)"
            },
            {
                "name": "es-NI-male-1",
                "value": "es-NI-male-1",
                "description": "Spanish (Nicaragua)"
            },
            {
                "name": "es-PA-female-1",
                "value": "es-PA-female-1",
                "description": "Spanish (Panama)"
            },
            {
                "name": "es-PA-male-1",
                "value": "es-PA-male-1",
                "description": "Spanish (Panama)"
            },
            {
                "name": "es-PE-female-1",
                "value": "es-PE-female-1",
                "description": "Spanish (Peru)"
            },
            {
                "name": "es-PE-male-1",
                "value": "es-PE-male-1",
                "description": "Spanish (Peru)"
            },
            {
                "name": "es-PR-female-1",
                "value": "es-PR-female-1",
                "description": "Spanish (Puerto Rico)"
            },
            {
                "name": "es-PR-male-1",
                "value": "es-PR-male-1",
                "description": "Spanish (Puerto Rico)"
            },
            {
                "name": "es-PY-female-1",
                "value": "es-PY-female-1",
                "description": "Spanish (Paraguay)"
            },
            {
                "name": "es-PY-male-1",
                "value": "es-PY-male-1",
                "description": "Spanish (Paraguay)"
            },
            {
                "name": "es-SV-female-1",
                "value": "es-SV-female-1",
                "description": "Spanish (El Salvador)"
            },
            {
                "name": "es-SV-male-1",
                "value": "es-SV-male-1",
                "description": "Spanish (El Salvador)"
            },
            {
                "name": "es-US-female-1",
                "value": "es-US-female-1",
                "description": "Spanish (United States)"
            },
            {
                "name": "es-US-male-1",
                "value": "es-US-male-1",
                "description": "Spanish (United States)"
            },
            {
                "name": "es-UY-female-1",
                "value": "es-UY-female-1",
                "description": "Spanish (Uruguay)"
            },
            {
                "name": "es-UY-male-1",
                "value": "es-UY-male-1",
                "description": "Spanish (Uruguay)"
            },
            {
                "name": "es-VE-female-1",
                "value": "es-VE-female-1",
                "description": "Spanish (Venezuela)"
            },
            {
                "name": "es-VE-male-1",
                "value": "es-VE-male-1",
                "description": "Spanish (Venezuela)"
            },
            {
                "name": "et-EE-female-11",
                "value": "et-EE-female-11",
                "description": "Estonian (Estonia)"
            },
            {
                "name": "et-EE-male-10",
                "value": "et-EE-male-10",
                "description": "Estonian (Estonia)"
            },
            {
                "name": "eu-ES-female-11",
                "value": "eu-ES-female-11",
                "description": "Basque"
            },
            {
                "name": "eu-ES-male-10",
                "value": "eu-ES-male-10",
                "description": "Basque"
            },
            {
                "name": "fa-IR-female-11",
                "value": "fa-IR-female-11",
                "description": "Persian (Iran)"
            },
            {
                "name": "fa-IR-male-10",
                "value": "fa-IR-male-10",
                "description": "Persian (Iran)"
            },
            {
                "name": "fi-FI-female-12",
                "value": "fi-FI-female-12",
                "description": "Finnish (Finland)"
            },
            {
                "name": "fi-FI-male-11",
                "value": "fi-FI-male-11",
                "description": "Finnish (Finland)"
            },
            {
                "name": "fi-FI-female-13",
                "value": "fi-FI-female-13",
                "description": "Finnish (Finland)"
            },
            {
                "name": "fil-PH-female-11",
                "value": "fil-PH-female-11",
                "description": "Filipino (Philippines)"
            },
            {
                "name": "fil-PH-male-10",
                "value": "fil-PH-male-10",
                "description": "Filipino (Philippines)"
            },
            {
                "name": "fr-BE-female-12",
                "value": "fr-BE-female-12",
                "description": "French (Belgium)"
            },
            {
                "name": "fr-BE-male-11",
                "value": "fr-BE-male-11",
                "description": "French (Belgium)"
            },
            {
                "name": "fr-CA-female-12",
                "value": "fr-CA-female-12",
                "description": "French (Canada)"
            },
            {
                "name": "fr-CA-male-11",
                "value": "fr-CA-male-11",
                "description": "French (Canada)"
            },
            {
                "name": "fr-CA-male-12",
                "value": "fr-CA-male-12",
                "description": "French (Canada)"
            },
            {
                "name": "fr-CA-male-13",
                "value": "fr-CA-male-13",
                "description": "French (Canada)"
            },
            {
                "name": "fr-CH-female-12",
                "value": "fr-CH-female-12",
                "description": "French (Switzerland)"
            },
            {
                "name": "fr-CH-male-11",
                "value": "fr-CH-male-11",
                "description": "French (Switzerland)"
            },
            {
                "name": "fr-FR-female-12",
                "value": "fr-FR-female-12",
                "description": "French (France)"
            },
            {
                "name": "fr-FR-male-11",
                "value": "fr-FR-male-11",
                "description": "French (France)"
            },
            {
                "name": "fr-FR-male-12",
                "value": "fr-FR-male-12",
                "description": "French (France)"
            },
            {
                "name": "fr-FR-female-13",
                "value": "fr-FR-female-13",
                "description": "French (France)"
            },
            {
                "name": "fr-FR-female-14",
                "value": "fr-FR-female-14",
                "description": "French (France)"
            },
            {
                "name": "fr-FR-male-13",
                "value": "fr-FR-male-13",
                "description": "French (France)"
            },
            {
                "name": "fr-FR-female-15",
                "value": "fr-FR-female-15",
                "description": "French (France)"
            },
            {
                "name": "fr-FR-female-16",
                "value": "fr-FR-female-16",
                "description": "French (France)"
            },
            {
                "name": "fr-FR-female-17",
                "value": "fr-FR-female-17",
                "description": "French (France)"
            },
            {
                "name": "fr-FR-male-14",
                "value": "fr-FR-male-14",
                "description": "French (France)"
            },
            {
                "name": "fr-FR-female-18",
                "value": "fr-FR-female-18",
                "description": "French (France)"
            },
            {
                "name": "fr-FR-male-15",
                "value": "fr-FR-male-15",
                "description": "French (France)"
            },
            {
                "name": "fr-FR-male-16",
                "value": "fr-FR-male-16",
                "description": "French (France)"
            },
            {
                "name": "fr-FR-male-17",
                "value": "fr-FR-male-17",
                "description": "French (France)"
            },
            {
                "name": "fr-FR-female-19",
                "value": "fr-FR-female-19",
                "description": "French (France)"
            },
            {
                "name": "fr-FR-female-20",
                "value": "fr-FR-female-20",
                "description": "French (France)"
            },
            {
                "name": "fr-FR-male-18",
                "value": "fr-FR-male-18",
                "description": "French (France)"
            },
            {
                "name": "fr-FR-female-21",
                "value": "fr-FR-female-21",
                "description": "French (France)"
            },
            {
                "name": "fr-FR-male-19",
                "value": "fr-FR-male-19",
                "description": "French (France)"
            },
            {
                "name": "fr-FR-male-20",
                "value": "fr-FR-male-20",
                "description": "French (France)"
            },
            {
                "name": "ga-IE-female-12",
                "value": "ga-IE-female-12",
                "description": "Irish (Ireland)"
            },
            {
                "name": "ga-IE-male-12",
                "value": "ga-IE-male-12",
                "description": "Irish (Ireland)"
            },
            {
                "name": "gl-ES-female-12",
                "value": "gl-ES-female-12",
                "description": "Galician"
            },
            {
                "name": "gl-ES-male-12",
                "value": "gl-ES-male-12",
                "description": "Galician"
            },
            {
                "name": "gu-IN-female-1",
                "value": "gu-IN-female-1",
                "description": "Gujarati (India)"
            },
            {
                "name": "gu-IN-male-1",
                "value": "gu-IN-male-1",
                "description": "Gujarati (India)"
            },
            {
                "name": "he-IL-female-12",
                "value": "he-IL-female-12",
                "description": "Hebrew (Israel)"
            },
            {
                "name": "he-IL-male-12",
                "value": "he-IL-male-12",
                "description": "Hebrew (Israel)"
            },
            {
                "name": "hi-IN-female-13",
                "value": "hi-IN-female-13",
                "description": "Hindi (India)"
            },
            {
                "name": "hi-IN-male-13",
                "value": "hi-IN-male-13",
                "description": "Hindi (India)"
            },
            {
                "name": "hi-IN-male-14",
                "value": "hi-IN-male-14",
                "description": "Hindi (India)"
            },
            {
                "name": "hi-IN-female-14",
                "value": "hi-IN-female-14",
                "description": "Hindi (India)"
            },
            {
                "name": "hi-IN-female-15",
                "value": "hi-IN-female-15",
                "description": "Hindi (India)"
            },
            {
                "name": "hi-IN-male-15",
                "value": "hi-IN-male-15",
                "description": "Hindi (India)"
            },
            {
                "name": "hi-IN-male-16",
                "value": "hi-IN-male-16",
                "description": "Hindi (India)"
            },
            {
                "name": "hr-HR-female-12",
                "value": "hr-HR-female-12",
                "description": "Croatian (Croatia)"
            },
            {
                "name": "hr-HR-male-12",
                "value": "hr-HR-male-12",
                "description": "Croatian (Croatia)"
            },
            {
                "name": "hu-HU-female-13",
                "value": "hu-HU-female-13",
                "description": "Hungarian (Hungary)"
            },
            {
                "name": "hu-HU-male-13",
                "value": "hu-HU-male-13",
                "description": "Hungarian (Hungary)"
            },
            {
                "name": "hy-AM-female-12",
                "value": "hy-AM-female-12",
                "description": "Armenian (Armenia)"
            },
            {
                "name": "hy-AM-male-12",
                "value": "hy-AM-male-12",
                "description": "Armenian (Armenia)"
            },
            {
                "name": "id-ID-female-13",
                "value": "id-ID-female-13",
                "description": "Indonesian (Indonesia)"
            },
            {
                "name": "id-ID-male-13",
                "value": "id-ID-male-13",
                "description": "Indonesian (Indonesia)"
            },
            {
                "name": "is-IS-female-12",
                "value": "is-IS-female-12",
                "description": "Icelandic (Iceland)"
            },
            {
                "name": "is-IS-male-12",
                "value": "is-IS-male-12",
                "description": "Icelandic (Iceland)"
            },
            {
                "name": "it-IT-female-13",
                "value": "it-IT-female-13",
                "description": "Italian (Italy)"
            },
            {
                "name": "it-IT-female-14",
                "value": "it-IT-female-14",
                "description": "Italian (Italy)"
            },
            {
                "name": "it-IT-male-13",
                "value": "it-IT-male-13",
                "description": "Italian (Italy)"
            },
            {
                "name": "it-IT-male-14",
                "value": "it-IT-male-14",
                "description": "Italian (Italy)"
            },
            {
                "name": "it-IT-male-15",
                "value": "it-IT-male-15",
                "description": "Italian (Italy)"
            },
            {
                "name": "it-IT-male-16",
                "value": "it-IT-male-16",
                "description": "Italian (Italy)"
            },
            {
                "name": "it-IT-female-15",
                "value": "it-IT-female-15",
                "description": "Italian (Italy)"
            },
            {
                "name": "it-IT-female-16",
                "value": "it-IT-female-16",
                "description": "Italian (Italy)"
            },
            {
                "name": "it-IT-male-17",
                "value": "it-IT-male-17",
                "description": "Italian (Italy)"
            },
            {
                "name": "it-IT-male-18",
                "value": "it-IT-male-18",
                "description": "Italian (Italy)"
            },
            {
                "name": "it-IT-female-17",
                "value": "it-IT-female-17",
                "description": "Italian (Italy)"
            },
            {
                "name": "it-IT-female-18",
                "value": "it-IT-female-18",
                "description": "Italian (Italy)"
            },
            {
                "name": "it-IT-male-19",
                "value": "it-IT-male-19",
                "description": "Italian (Italy)"
            },
            {
                "name": "it-IT-female-19",
                "value": "it-IT-female-19",
                "description": "Italian (Italy)"
            },
            {
                "name": "it-IT-female-20",
                "value": "it-IT-female-20",
                "description": "Italian (Italy)"
            },
            {
                "name": "it-IT-male-20",
                "value": "it-IT-male-20",
                "description": "Italian (Italy)"
            },
            {
                "name": "it-IT-male-21",
                "value": "it-IT-male-21",
                "description": "Italian (Italy)"
            },
            {
                "name": "it-IT-male-22",
                "value": "it-IT-male-22",
                "description": "Italian (Italy)"
            },
            {
                "name": "it-IT-male-23",
                "value": "it-IT-male-23",
                "description": "Italian (Italy)"
            },
            {
                "name": "it-IT-male-24",
                "value": "it-IT-male-24",
                "description": "Italian (Italy)"
            },
            {
                "name": "it-IT-female-21",
                "value": "it-IT-female-21",
                "description": "Italian (Italy)"
            },
            {
                "name": "it-IT-female-22",
                "value": "it-IT-female-22",
                "description": "Italian (Italy)"
            },
            {
                "name": "it-IT-male-25",
                "value": "it-IT-male-25",
                "description": "Italian (Italy)"
            },
            {
                "name": "it-IT-male-26",
                "value": "it-IT-male-26",
                "description": "Italian (Italy)"
            },
            {
                "name": "iu-Cans-CA-female-1",
                "value": "iu-Cans-CA-female-1",
                "description": "Inuktitut (Syllabics, Canada)"
            },
            {
                "name": "iu-Cans-CA-male-1",
                "value": "iu-Cans-CA-male-1",
                "description": "Inuktitut (Syllabics, Canada)"
            },
            {
                "name": "iu-Latn-CA-female-1",
                "value": "iu-Latn-CA-female-1",
                "description": "Inuktitut (Latin, Canada)"
            },
            {
                "name": "iu-Latn-CA-male-1",
                "value": "iu-Latn-CA-male-1",
                "description": "Inuktitut (Latin, Canada)"
            },
            {
                "name": "ja-JP-female-14",
                "value": "ja-JP-female-14",
                "description": "Japanese (Japan)"
            },
            {
                "name": "ja-JP-male-16",
                "value": "ja-JP-male-16",
                "description": "Japanese (Japan)"
            },
            {
                "name": "ja-JP-female-15",
                "value": "ja-JP-female-15",
                "description": "Japanese (Japan)"
            },
            {
                "name": "ja-JP-male-17",
                "value": "ja-JP-male-17",
                "description": "Japanese (Japan)"
            },
            {
                "name": "ja-JP-female-16",
                "value": "ja-JP-female-16",
                "description": "Japanese (Japan)"
            },
            {
                "name": "ja-JP-male-18",
                "value": "ja-JP-male-18",
                "description": "Japanese (Japan)"
            },
            {
                "name": "ja-JP-female-17",
                "value": "ja-JP-female-17",
                "description": "Japanese (Japan)"
            },
            {
                "name": "ja-JP-male-19",
                "value": "ja-JP-male-19",
                "description": "Japanese (Japan)"
            },
            {
                "name": "ja-JP-male-20",
                "value": "ja-JP-male-20",
                "description": "Japanese (Japan)"
            },
            {
                "name": "jv-ID-female-13",
                "value": "jv-ID-female-13",
                "description": "Javanese (Latin, Indonesia)"
            },
            {
                "name": "jv-ID-male-16",
                "value": "jv-ID-male-16",
                "description": "Javanese (Latin, Indonesia)"
            },
            {
                "name": "ka-GE-female-13",
                "value": "ka-GE-female-13",
                "description": "Georgian (Georgia)"
            },
            {
                "name": "ka-GE-male-16",
                "value": "ka-GE-male-16",
                "description": "Georgian (Georgia)"
            },
            {
                "name": "kk-KZ-female-13",
                "value": "kk-KZ-female-13",
                "description": "Kazakh (Kazakhstan)"
            },
            {
                "name": "kk-KZ-male-16",
                "value": "kk-KZ-male-16",
                "description": "Kazakh (Kazakhstan)"
            },
            {
                "name": "km-KH-female-13",
                "value": "km-KH-female-13",
                "description": "Khmer (Cambodia)"
            },
            {
                "name": "km-KH-male-16",
                "value": "km-KH-male-16",
                "description": "Khmer (Cambodia)"
            },
            {
                "name": "kn-IN-female-13",
                "value": "kn-IN-female-13",
                "description": "Kannada (India)"
            },
            {
                "name": "kn-IN-male-16",
                "value": "kn-IN-male-16",
                "description": "Kannada (India)"
            },
            {
                "name": "ko-KR-female-14",
                "value": "ko-KR-female-14",
                "description": "Korean (Korea)"
            },
            {
                "name": "ko-KR-male-17",
                "value": "ko-KR-male-17",
                "description": "Korean (Korea)"
            },
            {
                "name": "ko-KR-male-18",
                "value": "ko-KR-male-18",
                "description": "Korean (Korea)"
            },
            {
                "name": "ko-KR-male-19",
                "value": "ko-KR-male-19",
                "description": "Korean (Korea)"
            },
            {
                "name": "ko-KR-male-20",
                "value": "ko-KR-male-20",
                "description": "Korean (Korea)"
            },
            {
                "name": "ko-KR-female-15",
                "value": "ko-KR-female-15",
                "description": "Korean (Korea)"
            },
            {
                "name": "ko-KR-female-16",
                "value": "ko-KR-female-16",
                "description": "Korean (Korea)"
            },
            {
                "name": "ko-KR-female-17",
                "value": "ko-KR-female-17",
                "description": "Korean (Korea)"
            },
            {
                "name": "ko-KR-female-18",
                "value": "ko-KR-female-18",
                "description": "Korean (Korea)"
            },
            {
                "name": "ko-KR-male-21",
                "value": "ko-KR-male-21",
                "description": "Korean (Korea)"
            },
            {
                "name": "ko-KR-male-22",
                "value": "ko-KR-male-22",
                "description": "Korean (Korea)"
            },
            {
                "name": "lo-LA-female-13",
                "value": "lo-LA-female-13",
                "description": "Lao (Laos)"
            },
            {
                "name": "lo-LA-male-17",
                "value": "lo-LA-male-17",
                "description": "Lao (Laos)"
            },
            {
                "name": "lt-LT-female-13",
                "value": "lt-LT-female-13",
                "description": "Lithuanian (Lithuania)"
            },
            {
                "name": "lt-LT-male-17",
                "value": "lt-LT-male-17",
                "description": "Lithuanian (Lithuania)"
            },
            {
                "name": "lv-LV-female-13",
                "value": "lv-LV-female-13",
                "description": "Latvian (Latvia)"
            },
            {
                "name": "lv-LV-male-17",
                "value": "lv-LV-male-17",
                "description": "Latvian (Latvia)"
            },
            {
                "name": "mk-MK-female-13",
                "value": "mk-MK-female-13",
                "description": "Macedonian (North Macedonia)"
            },
            {
                "name": "mk-MK-male-17",
                "value": "mk-MK-male-17",
                "description": "Macedonian (North Macedonia)"
            },
            {
                "name": "ml-IN-female-13",
                "value": "ml-IN-female-13",
                "description": "Malayalam (India)"
            },
            {
                "name": "ml-IN-male-17",
                "value": "ml-IN-male-17",
                "description": "Malayalam (India)"
            },
            {
                "name": "mn-MN-female-13",
                "value": "mn-MN-female-13",
                "description": "Mongolian (Mongolia)"
            },
            {
                "name": "mn-MN-male-17",
                "value": "mn-MN-male-17",
                "description": "Mongolian (Mongolia)"
            },
            {
                "name": "mr-IN-female-1",
                "value": "mr-IN-female-1",
                "description": "Marathi (India)"
            },
            {
                "name": "mr-IN-male-1",
                "value": "mr-IN-male-1",
                "description": "Marathi (India)"
            },
            {
                "name": "ms-MY-female-13",
                "value": "ms-MY-female-13",
                "description": "Malay (Malaysia)"
            },
            {
                "name": "ms-MY-male-17",
                "value": "ms-MY-male-17",
                "description": "Malay (Malaysia)"
            },
            {
                "name": "mt-MT-female-13",
                "value": "mt-MT-female-13",
                "description": "Maltese (Malta)"
            },
            {
                "name": "mt-MT-male-17",
                "value": "mt-MT-male-17",
                "description": "Maltese (Malta)"
            },
            {
                "name": "my-MM-female-13",
                "value": "my-MM-female-13",
                "description": "Burmese (Myanmar)"
            },
            {
                "name": "my-MM-male-17",
                "value": "my-MM-male-17",
                "description": "Burmese (Myanmar)"
            },
            {
                "name": "nb-NO-female-14",
                "value": "nb-NO-female-14",
                "description": "Norwegian Bokmål (Norway)"
            },
            {
                "name": "nb-NO-male-18",
                "value": "nb-NO-male-18",
                "description": "Norwegian Bokmål (Norway)"
            },
            {
                "name": "nb-NO-female-15",
                "value": "nb-NO-female-15",
                "description": "Norwegian Bokmål (Norway)"
            },
            {
                "name": "ne-NP-female-13",
                "value": "ne-NP-female-13",
                "description": "Nepali (Nepal)"
            },
            {
                "name": "ne-NP-male-17",
                "value": "ne-NP-male-17",
                "description": "Nepali (Nepal)"
            },
            {
                "name": "nl-BE-female-14",
                "value": "nl-BE-female-14",
                "description": "Dutch (Belgium)"
            },
            {
                "name": "nl-BE-male-18",
                "value": "nl-BE-male-18",
                "description": "Dutch (Belgium)"
            },
            {
                "name": "nl-NL-female-14",
                "value": "nl-NL-female-14",
                "description": "Dutch (Netherlands)"
            },
            {
                "name": "nl-NL-male-18",
                "value": "nl-NL-male-18",
                "description": "Dutch (Netherlands)"
            },
            {
                "name": "nl-NL-female-15",
                "value": "nl-NL-female-15",
                "description": "Dutch (Netherlands)"
            },
            {
                "name": "or-IN-female-1",
                "value": "or-IN-female-1",
                "description": "Oriya (India)"
            },
            {
                "name": "or-IN-male-1",
                "value": "or-IN-male-1",
                "description": "Oriya (India)"
            },
            {
                "name": "pa-IN-male-1",
                "value": "pa-IN-male-1",
                "description": "Punjabi (India)"
            },
            {
                "name": "pa-IN-female-1",
                "value": "pa-IN-female-1",
                "description": "Punjabi (India)"
            },
            {
                "name": "pl-PL-female-14",
                "value": "pl-PL-female-14",
                "description": "Polish (Poland)"
            },
            {
                "name": "pl-PL-male-18",
                "value": "pl-PL-male-18",
                "description": "Polish (Poland)"
            },
            {
                "name": "pl-PL-female-15",
                "value": "pl-PL-female-15",
                "description": "Polish (Poland)"
            },
            {
                "name": "ps-AF-female-13",
                "value": "ps-AF-female-13",
                "description": "Pashto (Afghanistan)"
            },
            {
                "name": "ps-AF-male-17",
                "value": "ps-AF-male-17",
                "description": "Pashto (Afghanistan)"
            },
            {
                "name": "pt-BR-female-14",
                "value": "pt-BR-female-14",
                "description": "Portuguese (Brazil)"
            },
            {
                "name": "pt-BR-male-18",
                "value": "pt-BR-male-18",
                "description": "Portuguese (Brazil)"
            },
            {
                "name": "pt-BR-female-15",
                "value": "pt-BR-female-15",
                "description": "Portuguese (Brazil)"
            },
            {
                "name": "pt-BR-male-19",
                "value": "pt-BR-male-19",
                "description": "Portuguese (Brazil)"
            },
            {
                "name": "pt-BR-female-16",
                "value": "pt-BR-female-16",
                "description": "Portuguese (Brazil)"
            },
            {
                "name": "pt-BR-male-20",
                "value": "pt-BR-male-20",
                "description": "Portuguese (Brazil)"
            },
            {
                "name": "pt-BR-female-17",
                "value": "pt-BR-female-17",
                "description": "Portuguese (Brazil)"
            },
            {
                "name": "pt-BR-male-21",
                "value": "pt-BR-male-21",
                "description": "Portuguese (Brazil)"
            },
            {
                "name": "pt-BR-male-22",
                "value": "pt-BR-male-22",
                "description": "Portuguese (Brazil)"
            },
            {
                "name": "pt-BR-female-18",
                "value": "pt-BR-female-18",
                "description": "Portuguese (Brazil)"
            },
            {
                "name": "pt-BR-female-19",
                "value": "pt-BR-female-19",
                "description": "Portuguese (Brazil)"
            },
            {
                "name": "pt-BR-female-20",
                "value": "pt-BR-female-20",
                "description": "Portuguese (Brazil)"
            },
            {
                "name": "pt-BR-male-23",
                "value": "pt-BR-male-23",
                "description": "Portuguese (Brazil)"
            },
            {
                "name": "pt-BR-female-21",
                "value": "pt-BR-female-21",
                "description": "Portuguese (Brazil)"
            },
            {
                "name": "pt-BR-male-24",
                "value": "pt-BR-male-24",
                "description": "Portuguese (Brazil)"
            },
            {
                "name": "pt-BR-female-22",
                "value": "pt-BR-female-22",
                "description": "Portuguese (Brazil)"
            },
            {
                "name": "pt-BR-male-25",
                "value": "pt-BR-male-25",
                "description": "Portuguese (Brazil)"
            },
            {
                "name": "pt-BR-male-26",
                "value": "pt-BR-male-26",
                "description": "Portuguese (Brazil)"
            },
            {
                "name": "pt-BR-female-23",
                "value": "pt-BR-female-23",
                "description": "Portuguese (Brazil)"
            },
            {
                "name": "pt-BR-female-24",
                "value": "pt-BR-female-24",
                "description": "Portuguese (Brazil)"
            },
            {
                "name": "pt-PT-female-15",
                "value": "pt-PT-female-15",
                "description": "Portuguese (Portugal)"
            },
            {
                "name": "pt-PT-male-19",
                "value": "pt-PT-male-19",
                "description": "Portuguese (Portugal)"
            },
            {
                "name": "pt-PT-female-16",
                "value": "pt-PT-female-16",
                "description": "Portuguese (Portugal)"
            },
            {
                "name": "ro-RO-female-14",
                "value": "ro-RO-female-14",
                "description": "Romanian (Romania)"
            },
            {
                "name": "ro-RO-male-18",
                "value": "ro-RO-male-18",
                "description": "Romanian (Romania)"
            },
            {
                "name": "ru-RU-female-15",
                "value": "ru-RU-female-15",
                "description": "Russian (Russia)"
            },
            {
                "name": "ru-RU-male-19",
                "value": "ru-RU-male-19",
                "description": "Russian (Russia)"
            },
            {
                "name": "ru-RU-female-16",
                "value": "ru-RU-female-16",
                "description": "Russian (Russia)"
            },
            {
                "name": "si-LK-female-14",
                "value": "si-LK-female-14",
                "description": "Sinhala (Sri Lanka)"
            },
            {
                "name": "si-LK-male-18",
                "value": "si-LK-male-18",
                "description": "Sinhala (Sri Lanka)"
            },
            {
                "name": "sk-SK-female-14",
                "value": "sk-SK-female-14",
                "description": "Slovak (Slovakia)"
            },
            {
                "name": "sk-SK-male-18",
                "value": "sk-SK-male-18",
                "description": "Slovak (Slovakia)"
            },
            {
                "name": "sl-SI-female-14",
                "value": "sl-SI-female-14",
                "description": "Slovenian (Slovenia)"
            },
            {
                "name": "sl-SI-male-18",
                "value": "sl-SI-male-18",
                "description": "Slovenian (Slovenia)"
            },
            {
                "name": "so-SO-female-14",
                "value": "so-SO-female-14",
                "description": "Somali (Somalia)"
            },
            {
                "name": "so-SO-male-18",
                "value": "so-SO-male-18",
                "description": "Somali (Somalia)"
            },
            {
                "name": "sq-AL-female-14",
                "value": "sq-AL-female-14",
                "description": "Albanian (Albania)"
            },
            {
                "name": "sq-AL-male-18",
                "value": "sq-AL-male-18",
                "description": "Albanian (Albania)"
            },
            {
                "name": "sr-Latn-RS-male-1",
                "value": "sr-Latn-RS-male-1",
                "description": "Serbian (Latin, Serbia)"
            },
            {
                "name": "sr-Latn-RS-female-1",
                "value": "sr-Latn-RS-female-1",
                "description": "Serbian (Latin, Serbia)"
            },
            {
                "name": "sr-RS-female-14",
                "value": "sr-RS-female-14",
                "description": "Serbian (Cyrillic, Serbia)"
            },
            {
                "name": "sr-RS-male-18",
                "value": "sr-RS-male-18",
                "description": "Serbian (Cyrillic, Serbia)"
            },
            {
                "name": "su-ID-female-14",
                "value": "su-ID-female-14",
                "description": "Sundanese (Indonesia)"
            },
            {
                "name": "su-ID-male-18",
                "value": "su-ID-male-18",
                "description": "Sundanese (Indonesia)"
            },
            {
                "name": "sv-SE-female-15",
                "value": "sv-SE-female-15",
                "description": "Swedish (Sweden)"
            },
            {
                "name": "sv-SE-male-19",
                "value": "sv-SE-male-19",
                "description": "Swedish (Sweden)"
            },
            {
                "name": "sv-SE-female-16",
                "value": "sv-SE-female-16",
                "description": "Swedish (Sweden)"
            },
            {
                "name": "sw-KE-female-14",
                "value": "sw-KE-female-14",
                "description": "Swahili (Kenya)"
            },
            {
                "name": "sw-KE-male-18",
                "value": "sw-KE-male-18",
                "description": "Swahili (Kenya)"
            },
            {
                "name": "sw-TZ-female-1",
                "value": "sw-TZ-female-1",
                "description": "Swahili (Tanzania)"
            },
            {
                "name": "sw-TZ-male-1",
                "value": "sw-TZ-male-1",
                "description": "Swahili (Tanzania)"
            },
            {
                "name": "ta-IN-female-14",
                "value": "ta-IN-female-14",
                "description": "Tamil (India)"
            },
            {
                "name": "ta-IN-male-18",
                "value": "ta-IN-male-18",
                "description": "Tamil (India)"
            },
            {
                "name": "ta-LK-female-1",
                "value": "ta-LK-female-1",
                "description": "Tamil (Sri Lanka)"
            },
            {
                "name": "ta-LK-male-1",
                "value": "ta-LK-male-1",
                "description": "Tamil (Sri Lanka)"
            },
            {
                "name": "ta-MY-female-1",
                "value": "ta-MY-female-1",
                "description": "Tamil (Malaysia)"
            },
            {
                "name": "ta-MY-male-1",
                "value": "ta-MY-male-1",
                "description": "Tamil (Malaysia)"
            },
            {
                "name": "ta-SG-female-1",
                "value": "ta-SG-female-1",
                "description": "Tamil (Singapore)"
            },
            {
                "name": "ta-SG-male-1",
                "value": "ta-SG-male-1",
                "description": "Tamil (Singapore)"
            },
            {
                "name": "te-IN-female-14",
                "value": "te-IN-female-14",
                "description": "Telugu (India)"
            },
            {
                "name": "te-IN-male-18",
                "value": "te-IN-male-18",
                "description": "Telugu (India)"
            },
            {
                "name": "th-TH-female-15",
                "value": "th-TH-female-15",
                "description": "Thai (Thailand)"
            },
            {
                "name": "th-TH-male-19",
                "value": "th-TH-male-19",
                "description": "Thai (Thailand)"
            },
            {
                "name": "th-TH-female-16",
                "value": "th-TH-female-16",
                "description": "Thai (Thailand)"
            },
            {
                "name": "tr-TR-female-15",
                "value": "tr-TR-female-15",
                "description": "Turkish (Turkey)"
            },
            {
                "name": "tr-TR-male-19",
                "value": "tr-TR-male-19",
                "description": "Turkish (Turkey)"
            },
            {
                "name": "uk-UA-female-14",
                "value": "uk-UA-female-14",
                "description": "Ukrainian (Ukraine)"
            },
            {
                "name": "uk-UA-male-18",
                "value": "uk-UA-male-18",
                "description": "Ukrainian (Ukraine)"
            },
            {
                "name": "ur-IN-female-1",
                "value": "ur-IN-female-1",
                "description": "Urdu (India)"
            },
            {
                "name": "ur-IN-male-1",
                "value": "ur-IN-male-1",
                "description": "Urdu (India)"
            },
            {
                "name": "ur-PK-female-14",
                "value": "ur-PK-female-14",
                "description": "Urdu (Pakistan)"
            },
            {
                "name": "ur-PK-male-18",
                "value": "ur-PK-male-18",
                "description": "Urdu (Pakistan)"
            },
            {
                "name": "uz-UZ-female-14",
                "value": "uz-UZ-female-14",
                "description": "Uzbek (Latin, Uzbekistan)"
            },
            {
                "name": "uz-UZ-male-18",
                "value": "uz-UZ-male-18",
                "description": "Uzbek (Latin, Uzbekistan)"
            },
            {
                "name": "vi-VN-female-14",
                "value": "vi-VN-female-14",
                "description": "Vietnamese (Vietnam)"
            },
            {
                "name": "vi-VN-male-18",
                "value": "vi-VN-male-18",
                "description": "Vietnamese (Vietnam)"
            },
            {
                "name": "wuu-CN-female-1",
                "value": "wuu-CN-female-1",
                "description": "Chinese (Wu, Simplified)"
            },
            {
                "name": "wuu-CN-male-1",
                "value": "wuu-CN-male-1",
                "description": "Chinese (Wu, Simplified)"
            },
            {
                "name": "yue-CN-female-1",
                "value": "yue-CN-female-1",
                "description": "Chinese (Cantonese, Simplified)"
            },
            {
                "name": "yue-CN-male-1",
                "value": "yue-CN-male-1",
                "description": "Chinese (Cantonese, Simplified)"
            },
            {
                "name": "zh-CN-female-15",
                "value": "zh-CN-female-15",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-male-19",
                "value": "zh-CN-male-19",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-male-20",
                "value": "zh-CN-male-20",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-female-16",
                "value": "zh-CN-female-16",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-male-21",
                "value": "zh-CN-male-21",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-female-17",
                "value": "zh-CN-female-17",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-female-18",
                "value": "zh-CN-female-18",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-female-19",
                "value": "zh-CN-female-19",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-female-20",
                "value": "zh-CN-female-20",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-female-21",
                "value": "zh-CN-female-21",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-female-22",
                "value": "zh-CN-female-22",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-female-23",
                "value": "zh-CN-female-23",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-female-24",
                "value": "zh-CN-female-24",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-female-25",
                "value": "zh-CN-female-25",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-female-26",
                "value": "zh-CN-female-26",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-female-27",
                "value": "zh-CN-female-27",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-female-28",
                "value": "zh-CN-female-28",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-female-29",
                "value": "zh-CN-female-29",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-female-30",
                "value": "zh-CN-female-30",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-female-31",
                "value": "zh-CN-female-31",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-female-32",
                "value": "zh-CN-female-32",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-female-33",
                "value": "zh-CN-female-33",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-female-34",
                "value": "zh-CN-female-34",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-male-22",
                "value": "zh-CN-male-22",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-male-23",
                "value": "zh-CN-male-23",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-male-24",
                "value": "zh-CN-male-24",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-male-25",
                "value": "zh-CN-male-25",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-male-26",
                "value": "zh-CN-male-26",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-male-27",
                "value": "zh-CN-male-27",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-male-28",
                "value": "zh-CN-male-28",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-male-29",
                "value": "zh-CN-male-29",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-male-30",
                "value": "zh-CN-male-30",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-male-31",
                "value": "zh-CN-male-31",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-male-32",
                "value": "zh-CN-male-32",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-male-33",
                "value": "zh-CN-male-33",
                "description": "Chinese (Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-guangxi-male-1",
                "value": "zh-CN-guangxi-male-1",
                "description": "Chinese (Guangxi Accent Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-henan-male-1",
                "value": "zh-CN-henan-male-1",
                "description": "Chinese (Zhongyuan Mandarin Henan, Simplified)"
            },
            {
                "name": "zh-CN-liaoning-female-2",
                "value": "zh-CN-liaoning-female-2",
                "description": "Chinese (Northeastern Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-liaoning-male-1",
                "value": "zh-CN-liaoning-male-1",
                "description": "Chinese (Northeastern Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-shaanxi-female-2",
                "value": "zh-CN-shaanxi-female-2",
                "description": "Chinese (Zhongyuan Mandarin Shaanxi, Simplified)"
            },
            {
                "name": "zh-CN-shandong-male-1",
                "value": "zh-CN-shandong-male-1",
                "description": "Chinese (Jilu Mandarin, Simplified)"
            },
            {
                "name": "zh-CN-sichuan-male-1",
                "value": "zh-CN-sichuan-male-1",
                "description": "Chinese (Southwestern Mandarin, Simplified)"
            },
            {
                "name": "zh-HK-female-18",
                "value": "zh-HK-female-18",
                "description": "Chinese (Cantonese, Traditional)"
            },
            {
                "name": "zh-HK-male-22",
                "value": "zh-HK-male-22",
                "description": "Chinese (Cantonese, Traditional)"
            },
            {
                "name": "zh-HK-female-19",
                "value": "zh-HK-female-19",
                "description": "Chinese (Cantonese, Traditional)"
            },
            {
                "name": "zh-TW-female-19",
                "value": "zh-TW-female-19",
                "description": "Chinese (Taiwanese Mandarin, Traditional)"
            },
            {
                "name": "zh-TW-male-22",
                "value": "zh-TW-male-22",
                "description": "Chinese (Taiwanese Mandarin, Traditional)"
            },
            {
                "name": "zh-TW-female-20",
                "value": "zh-TW-female-20",
                "description": "Chinese (Taiwanese Mandarin, Traditional)"
            },
            {
                "name": "zu-ZA-female-17",
                "value": "zu-ZA-female-17",
                "description": "Zulu (South Africa)"
            },
            {
                "name": "zu-ZA-male-21",
                "value": "zu-ZA-male-21",
                "description": "Zulu (South Africa)"
            }
        ],
        default: 'es-EC-female-1',
        displayOptions: {
            show: {
                operation: ['text-to-speech'],
            },
        },
        description: 'Accent or voice code',
    },
    {
        displayName: 'Custom Accent',
        name: 'accent_custom',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                operation: ['text-to-speech'],
                accent: ['other'],
            },
        },
        description: 'Custom accent code if not listed above',
    },
    {
        displayName: 'Speaker Clone URL',
        name: 'speaker_clone_url',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                operation: ['text-to-speech'],
            },
        },
        description: 'Direct URL to an audio file for voice cloning',
    },
    {
        displayName: 'Speaker Clone File Store Key',
        name: 'speaker_clone_file_store_key',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                operation: ['text-to-speech'],
            },
        },
        description: 'File store key for a voice clone sample',
    },
    {
        displayName: 'Voice ID',
        name: 'voice_id',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                operation: ['text-to-speech'],
            },
        },
        description: 'Voice ID for a specific cloned voice',
    },
];



// async function returnTTSBinary<PostReceiveAction>(
//     this: IExecuteSingleFunctions,
//     items: INodeExecutionData[],
//     responseData: IN8nHttpFullResponse,
// ): Promise<INodeExecutionData[]> {
//     const binary_name = this.getNodeParameter('additionalFields["binary_name"]', 'data') as string;
//     let file_name = this.getNodeParameter('additionalFields["file_name"]', 'tts_audio') as string;
//     const operation = this.getNodeParameter('operation') as string;

//     console.log('TTS Binary Processing:');
//     console.log('- Operation:', operation);
//     console.log('- Binary Name:', binary_name);
//     console.log('- Initial File Name:', file_name);

//     // Detect content type from response
//     const contentType = responseData.headers['content-type'] || responseData.headers['Content-Type'] || '';
//     let extension = 'mp3';
//     let mimeType = 'audio/mpeg';
//     if (String(contentType).includes('wav')) {
//         extension = 'wav';
//         mimeType = 'audio/wav';
//     }

//     // Use appropriate filename for TTS operation
//     if (operation === 'text-to-speech' && file_name === 'tts_audio') {
//         file_name = `text_to_speech.${extension}`;
//         console.log('- Final File Name:', file_name);
//     }

//     // Ensure we have binary data
//     if (!responseData.body) {
//         throw new Error('No binary data received from the TTS service');
//     }

//     // Convert the response body to a Buffer if it's not already

//     let binaryBuffer: Buffer;

//     if (Buffer.isBuffer(responseData.body)) {
//         // Already a buffer, use as is
//         binaryBuffer = responseData.body;
//     } else if (typeof responseData.body === 'string') {
//         // Check if this string is actually base64 (sometimes APIs do this)
//         const isBase64 = /^[A-Za-z0-9+/=]+$/.test(responseData.body.trim());
//         if (isBase64) {
//             console.log('- Interpreting body as base64 string');
//             binaryBuffer = Buffer.from(responseData.body, 'base64');
//         } else {
//             console.log('- Interpreting body as binary string');
//             binaryBuffer = Buffer.from(responseData.body, 'binary');
//         }
//     } else {
//         // Fallback: try generic conversion
//         binaryBuffer = Buffer.from(responseData.body as any);
//     }
    

//     const binaryData = await this.helpers.prepareBinaryData(
//         binaryBuffer,
//         file_name,
//         mimeType
//     );


//     console.log('- Binary Data Prepared Successfully');
//     console.log('- Response Headers:', responseData.headers);

//     return items.map(() => ({ json: responseData.headers, binary: { [binary_name]: binaryData } }));
// }

async function returnTTSBinary<PostReceiveAction>( this: IExecuteSingleFunctions, items: INodeExecutionData[], responseData: IN8nHttpFullResponse ): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('operation') as string;

	const binaryData = await this.helpers.prepareBinaryData(
		responseData.body as Buffer,
		`audio.${operation}.mp3`,
		'audio/mp3',
	);

	return items.map(() => ({ json: responseData.headers, binary: { ['data']: binaryData } }));
}