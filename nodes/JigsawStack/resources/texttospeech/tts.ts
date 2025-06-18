import {
    INodeProperties,
} from 'n8n-workflow';
import { returnResponse } from '../../utils';

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
                            voice_id: '={{$parameter.voice_id}}',
                            return_type: '={{$parameter.return_type}}',
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
        type: 'string',
        required: true,
        default: 'en-US-female-7',
        // options: [
        //     {
        //         "name": "AF-ZA-FEMALE-1",
        //         "value": "af-ZA-female-1"
        //     },
        //     {
        //         "name": "AF-ZA-MALE-1",
        //         "value": "af-ZA-male-1"
        //     },
        //     {
        //         "name": "AM-ET-FEMALE-1",
        //         "value": "am-ET-female-1"
        //     },
        //     {
        //         "name": "AM-ET-MALE-1",
        //         "value": "am-ET-male-1"
        //     },
        //     {
        //         "name": "AR-AE-FEMALE-1",
        //         "value": "ar-AE-female-1"
        //     },
        //     {
        //         "name": "AR-AE-MALE-1",
        //         "value": "ar-AE-male-1"
        //     },
        //     {
        //         "name": "AR-BH-FEMALE-1",
        //         "value": "ar-BH-female-1"
        //     },
        //     {
        //         "name": "AR-BH-MALE-1",
        //         "value": "ar-BH-male-1"
        //     },
        //     {
        //         "name": "AR-DZ-FEMALE-1",
        //         "value": "ar-DZ-female-1"
        //     },
        //     {
        //         "name": "AR-DZ-MALE-1",
        //         "value": "ar-DZ-male-1"
        //     },
        //     {
        //         "name": "AR-EG-FEMALE-1",
        //         "value": "ar-EG-female-1"
        //     },
        //     {
        //         "name": "AR-EG-MALE-1",
        //         "value": "ar-EG-male-1"
        //     },
        //     {
        //         "name": "AR-IQ-FEMALE-1",
        //         "value": "ar-IQ-female-1"
        //     },
        //     {
        //         "name": "AR-IQ-MALE-1",
        //         "value": "ar-IQ-male-1"
        //     },
        //     {
        //         "name": "AR-JO-FEMALE-1",
        //         "value": "ar-JO-female-1"
        //     },
        //     {
        //         "name": "AR-JO-MALE-1",
        //         "value": "ar-JO-male-1"
        //     },
        //     {
        //         "name": "AR-KW-FEMALE-1",
        //         "value": "ar-KW-female-1"
        //     },
        //     {
        //         "name": "AR-KW-MALE-1",
        //         "value": "ar-KW-male-1"
        //     },
        //     {
        //         "name": "AR-LB-FEMALE-1",
        //         "value": "ar-LB-female-1"
        //     },
        //     {
        //         "name": "AR-LB-MALE-1",
        //         "value": "ar-LB-male-1"
        //     },
        //     {
        //         "name": "AR-LY-FEMALE-1",
        //         "value": "ar-LY-female-1"
        //     },
        //     {
        //         "name": "AR-LY-MALE-1",
        //         "value": "ar-LY-male-1"
        //     },
        //     {
        //         "name": "AR-MA-FEMALE-1",
        //         "value": "ar-MA-female-1"
        //     },
        //     {
        //         "name": "AR-MA-MALE-1",
        //         "value": "ar-MA-male-1"
        //     },
        //     {
        //         "name": "AR-OM-FEMALE-1",
        //         "value": "ar-OM-female-1"
        //     },
        //     {
        //         "name": "AR-OM-MALE-1",
        //         "value": "ar-OM-male-1"
        //     },
        //     {
        //         "name": "AR-QA-FEMALE-1",
        //         "value": "ar-QA-female-1"
        //     },
        //     {
        //         "name": "AR-QA-MALE-1",
        //         "value": "ar-QA-male-1"
        //     },
        //     {
        //         "name": "AR-SA-FEMALE-1",
        //         "value": "ar-SA-female-1"
        //     },
        //     {
        //         "name": "AR-SA-MALE-1",
        //         "value": "ar-SA-male-1"
        //     },
        //     {
        //         "name": "AR-SY-FEMALE-1",
        //         "value": "ar-SY-female-1"
        //     },
        //     {
        //         "name": "AR-SY-MALE-1",
        //         "value": "ar-SY-male-1"
        //     },
        //     {
        //         "name": "AR-TN-FEMALE-1",
        //         "value": "ar-TN-female-1"
        //     },
        //     {
        //         "name": "AR-TN-MALE-1",
        //         "value": "ar-TN-male-1"
        //     },
        //     {
        //         "name": "AR-YE-FEMALE-1",
        //         "value": "ar-YE-female-1"
        //     },
        //     {
        //         "name": "AR-YE-MALE-1",
        //         "value": "ar-YE-male-1"
        //     },
        //     {
        //         "name": "AS-IN-MALE-1",
        //         "value": "as-IN-male-1"
        //     },
        //     {
        //         "name": "AS-IN-FEMALE-1",
        //         "value": "as-IN-female-1"
        //     },
        //     {
        //         "name": "AZ-AZ-FEMALE-1",
        //         "value": "az-AZ-female-1"
        //     },
        //     {
        //         "name": "AZ-AZ-MALE-1",
        //         "value": "az-AZ-male-1"
        //     },
        //     {
        //         "name": "BG-BG-FEMALE-1",
        //         "value": "bg-BG-female-1"
        //     },
        //     {
        //         "name": "BG-BG-MALE-1",
        //         "value": "bg-BG-male-1"
        //     },
        //     {
        //         "name": "BN-BD-FEMALE-1",
        //         "value": "bn-BD-female-1"
        //     },
        //     {
        //         "name": "BN-BD-MALE-1",
        //         "value": "bn-BD-male-1"
        //     },
        //     {
        //         "name": "BN-IN-FEMALE-1",
        //         "value": "bn-IN-female-1"
        //     },
        //     {
        //         "name": "BN-IN-MALE-1",
        //         "value": "bn-IN-male-1"
        //     },
        //     {
        //         "name": "BS-BA-FEMALE-1",
        //         "value": "bs-BA-female-1"
        //     },
        //     {
        //         "name": "BS-BA-MALE-1",
        //         "value": "bs-BA-male-1"
        //     },
        //     {
        //         "name": "CA-ES-FEMALE-1",
        //         "value": "ca-ES-female-1"
        //     },
        //     {
        //         "name": "CA-ES-MALE-1",
        //         "value": "ca-ES-male-1"
        //     },
        //     {
        //         "name": "CA-ES-FEMALE-2",
        //         "value": "ca-ES-female-2"
        //     },
        //     {
        //         "name": "CS-CZ-FEMALE-1",
        //         "value": "cs-CZ-female-1"
        //     },
        //     {
        //         "name": "CS-CZ-MALE-1",
        //         "value": "cs-CZ-male-1"
        //     },
        //     {
        //         "name": "CY-GB-FEMALE-1",
        //         "value": "cy-GB-female-1"
        //     },
        //     {
        //         "name": "CY-GB-MALE-1",
        //         "value": "cy-GB-male-1"
        //     },
        //     {
        //         "name": "DA-DK-FEMALE-1",
        //         "value": "da-DK-female-1"
        //     },
        //     {
        //         "name": "DA-DK-MALE-1",
        //         "value": "da-DK-male-1"
        //     },
        //     {
        //         "name": "DE-AT-FEMALE-1",
        //         "value": "de-AT-female-1"
        //     },
        //     {
        //         "name": "DE-AT-MALE-1",
        //         "value": "de-AT-male-1"
        //     },
        //     {
        //         "name": "DE-CH-FEMALE-1",
        //         "value": "de-CH-female-1"
        //     },
        //     {
        //         "name": "DE-CH-MALE-1",
        //         "value": "de-CH-male-1"
        //     },
        //     {
        //         "name": "DE-DE-FEMALE-1",
        //         "value": "de-DE-female-1"
        //     },
        //     {
        //         "name": "DE-DE-MALE-1",
        //         "value": "de-DE-male-1"
        //     },
        //     {
        //         "name": "DE-DE-FEMALE-2",
        //         "value": "de-DE-female-2"
        //     },
        //     {
        //         "name": "DE-DE-MALE-2",
        //         "value": "de-DE-male-2"
        //     },
        //     {
        //         "name": "DE-DE-MALE-3",
        //         "value": "de-DE-male-3"
        //     },
        //     {
        //         "name": "DE-DE-FEMALE-3",
        //         "value": "de-DE-female-3"
        //     },
        //     {
        //         "name": "DE-DE-MALE-4",
        //         "value": "de-DE-male-4"
        //     },
        //     {
        //         "name": "DE-DE-MALE-5",
        //         "value": "de-DE-male-5"
        //     },
        //     {
        //         "name": "DE-DE-FEMALE-4",
        //         "value": "de-DE-female-4"
        //     },
        //     {
        //         "name": "DE-DE-MALE-6",
        //         "value": "de-DE-male-6"
        //     },
        //     {
        //         "name": "DE-DE-MALE-7",
        //         "value": "de-DE-male-7"
        //     },
        //     {
        //         "name": "DE-DE-FEMALE-5",
        //         "value": "de-DE-female-5"
        //     },
        //     {
        //         "name": "DE-DE-MALE-8",
        //         "value": "de-DE-male-8"
        //     },
        //     {
        //         "name": "DE-DE-FEMALE-6",
        //         "value": "de-DE-female-6"
        //     },
        //     {
        //         "name": "DE-DE-FEMALE-7",
        //         "value": "de-DE-female-7"
        //     },
        //     {
        //         "name": "DE-DE-MALE-9",
        //         "value": "de-DE-male-9"
        //     },
        //     {
        //         "name": "DE-DE-FEMALE-8",
        //         "value": "de-DE-female-8"
        //     },
        //     {
        //         "name": "DE-DE-FEMALE-9",
        //         "value": "de-DE-female-9"
        //     },
        //     {
        //         "name": "DE-DE-FEMALE-10",
        //         "value": "de-DE-female-10"
        //     },
        //     {
        //         "name": "EL-GR-FEMALE-2",
        //         "value": "el-GR-female-2"
        //     },
        //     {
        //         "name": "EL-GR-MALE-2",
        //         "value": "el-GR-male-2"
        //     },
        //     {
        //         "name": "EN-AU-FEMALE-2",
        //         "value": "en-AU-female-2"
        //     },
        //     {
        //         "name": "EN-AU-MALE-2",
        //         "value": "en-AU-male-2"
        //     },
        //     {
        //         "name": "EN-AU-FEMALE-3",
        //         "value": "en-AU-female-3"
        //     },
        //     {
        //         "name": "EN-AU-FEMALE-4",
        //         "value": "en-AU-female-4"
        //     },
        //     {
        //         "name": "EN-AU-MALE-3",
        //         "value": "en-AU-male-3"
        //     },
        //     {
        //         "name": "EN-AU-MALE-4",
        //         "value": "en-AU-male-4"
        //     },
        //     {
        //         "name": "EN-AU-FEMALE-5",
        //         "value": "en-AU-female-5"
        //     },
        //     {
        //         "name": "EN-AU-FEMALE-6",
        //         "value": "en-AU-female-6"
        //     },
        //     {
        //         "name": "EN-AU-FEMALE-7",
        //         "value": "en-AU-female-7"
        //     },
        //     {
        //         "name": "EN-AU-MALE-5",
        //         "value": "en-AU-male-5"
        //     },
        //     {
        //         "name": "EN-AU-FEMALE-8",
        //         "value": "en-AU-female-8"
        //     },
        //     {
        //         "name": "EN-AU-MALE-6",
        //         "value": "en-AU-male-6"
        //     },
        //     {
        //         "name": "EN-AU-MALE-7",
        //         "value": "en-AU-male-7"
        //     },
        //     {
        //         "name": "EN-AU-FEMALE-9",
        //         "value": "en-AU-female-9"
        //     },
        //     {
        //         "name": "EN-CA-FEMALE-2",
        //         "value": "en-CA-female-2"
        //     },
        //     {
        //         "name": "EN-CA-MALE-2",
        //         "value": "en-CA-male-2"
        //     },
        //     {
        //         "name": "EN-GB-FEMALE-2",
        //         "value": "en-GB-female-2"
        //     },
        //     {
        //         "name": "EN-GB-MALE-2",
        //         "value": "en-GB-male-2"
        //     },
        //     {
        //         "name": "EN-GB-FEMALE-3",
        //         "value": "en-GB-female-3"
        //     },
        //     {
        //         "name": "EN-GB-FEMALE-4",
        //         "value": "en-GB-female-4"
        //     },
        //     {
        //         "name": "EN-GB-MALE-3",
        //         "value": "en-GB-male-3"
        //     },
        //     {
        //         "name": "EN-GB-FEMALE-5",
        //         "value": "en-GB-female-5"
        //     },
        //     {
        //         "name": "EN-GB-MALE-4",
        //         "value": "en-GB-male-4"
        //     },
        //     {
        //         "name": "EN-GB-MALE-5",
        //         "value": "en-GB-male-5"
        //     },
        //     {
        //         "name": "EN-GB-FEMALE-6",
        //         "value": "en-GB-female-6"
        //     },
        //     {
        //         "name": "EN-GB-FEMALE-7",
        //         "value": "en-GB-female-7"
        //     },
        //     {
        //         "name": "EN-GB-MALE-6",
        //         "value": "en-GB-male-6"
        //     },
        //     {
        //         "name": "EN-GB-MALE-7",
        //         "value": "en-GB-male-7"
        //     },
        //     {
        //         "name": "EN-GB-FEMALE-8",
        //         "value": "en-GB-female-8"
        //     },
        //     {
        //         "name": "EN-GB-MALE-8",
        //         "value": "en-GB-male-8"
        //     },
        //     {
        //         "name": "EN-GB-FEMALE-9",
        //         "value": "en-GB-female-9"
        //     },
        //     {
        //         "name": "EN-GB-FEMALE-10",
        //         "value": "en-GB-female-10"
        //     },
        //     {
        //         "name": "EN-GB-MALE-9",
        //         "value": "en-GB-male-9"
        //     },
        //     {
        //         "name": "EN-GB-MALE-10",
        //         "value": "en-GB-male-10"
        //     },
        //     {
        //         "name": "EN-GB-FEMALE-11",
        //         "value": "en-GB-female-11"
        //     },
        //     {
        //         "name": "EN-HK-FEMALE-1",
        //         "value": "en-HK-female-1"
        //     },
        //     {
        //         "name": "EN-HK-MALE-1",
        //         "value": "en-HK-male-1"
        //     },
        //     {
        //         "name": "EN-IE-FEMALE-3",
        //         "value": "en-IE-female-3"
        //     },
        //     {
        //         "name": "EN-IE-MALE-3",
        //         "value": "en-IE-male-3"
        //     },
        //     {
        //         "name": "EN-IN-FEMALE-3",
        //         "value": "en-IN-female-3"
        //     },
        //     {
        //         "name": "EN-IN-MALE-3",
        //         "value": "en-IN-male-3"
        //     },
        //     {
        //         "name": "EN-IN-MALE-4",
        //         "value": "en-IN-male-4"
        //     },
        //     {
        //         "name": "EN-IN-FEMALE-4",
        //         "value": "en-IN-female-4"
        //     },
        //     {
        //         "name": "EN-IN-FEMALE-5",
        //         "value": "en-IN-female-5"
        //     },
        //     {
        //         "name": "EN-IN-FEMALE-6",
        //         "value": "en-IN-female-6"
        //     },
        //     {
        //         "name": "EN-IN-MALE-5",
        //         "value": "en-IN-male-5"
        //     },
        //     {
        //         "name": "EN-IN-MALE-6",
        //         "value": "en-IN-male-6"
        //     },
        //     {
        //         "name": "EN-KE-FEMALE-1",
        //         "value": "en-KE-female-1"
        //     },
        //     {
        //         "name": "EN-KE-MALE-1",
        //         "value": "en-KE-male-1"
        //     },
        //     {
        //         "name": "EN-NG-FEMALE-1",
        //         "value": "en-NG-female-1"
        //     },
        //     {
        //         "name": "EN-NG-MALE-1",
        //         "value": "en-NG-male-1"
        //     },
        //     {
        //         "name": "EN-NZ-FEMALE-1",
        //         "value": "en-NZ-female-1"
        //     },
        //     {
        //         "name": "EN-NZ-MALE-1",
        //         "value": "en-NZ-male-1"
        //     },
        //     {
        //         "name": "EN-PH-FEMALE-1",
        //         "value": "en-PH-female-1"
        //     },
        //     {
        //         "name": "EN-PH-MALE-1",
        //         "value": "en-PH-male-1"
        //     },
        //     {
        //         "name": "EN-SG-FEMALE-1",
        //         "value": "en-SG-female-1"
        //     },
        //     {
        //         "name": "EN-SG-MALE-1",
        //         "value": "en-SG-male-1"
        //     },
        //     {
        //         "name": "EN-TZ-FEMALE-1",
        //         "value": "en-TZ-female-1"
        //     },
        //     {
        //         "name": "EN-TZ-MALE-1",
        //         "value": "en-TZ-male-1"
        //     },
        //     {
        //         "name": "EN-US-FEMALE-3",
        //         "value": "en-US-female-3"
        //     },
        //     {
        //         "name": "EN-US-FEMALE-4",
        //         "value": "en-US-female-4"
        //     },
        //     {
        //         "name": "EN-US-MALE-3",
        //         "value": "en-US-male-3"
        //     },
        //     {
        //         "name": "EN-US-MALE-4",
        //         "value": "en-US-male-4"
        //     },
        //     {
        //         "name": "EN-US-FEMALE-5",
        //         "value": "en-US-female-5"
        //     },
        //     {
        //         "name": "EN-US-FEMALE-6",
        //         "value": "en-US-female-6"
        //     },
        //     {
        //         "name": "EN-US-MALE-5",
        //         "value": "en-US-male-5"
        //     },
        //     {
        //         "name": "EN-US-MALE-6",
        //         "value": "en-US-male-6"
        //     },
        //     {
        //         "name": "EN-US-FEMALE-7",
        //         "value": "en-US-female-7"
        //     },
        //     {
        //         "name": "EN-US-MALE-7",
        //         "value": "en-US-male-7"
        //     },
        //     {
        //         "name": "EN-US-FEMALE-8",
        //         "value": "en-US-female-8"
        //     },
        //     {
        //         "name": "EN-US-MALE-8",
        //         "value": "en-US-male-8"
        //     },
        //     {
        //         "name": "EN-US-FEMALE-9",
        //         "value": "en-US-female-9"
        //     },
        //     {
        //         "name": "EN-US-MALE-9",
        //         "value": "en-US-male-9"
        //     },
        //     {
        //         "name": "EN-US-FEMALE-10",
        //         "value": "en-US-female-10"
        //     },
        //     {
        //         "name": "EN-US-MALE-10",
        //         "value": "en-US-male-10"
        //     },
        //     {
        //         "name": "EN-US-FEMALE-11",
        //         "value": "en-US-female-11"
        //     },
        //     {
        //         "name": "EN-US-MALE-11",
        //         "value": "en-US-male-11"
        //     },
        //     {
        //         "name": "EN-US-FEMALE-12",
        //         "value": "en-US-female-12"
        //     },
        //     {
        //         "name": "EN-US-MALE-12",
        //         "value": "en-US-male-12"
        //     },
        //     {
        //         "name": "EN-US-FEMALE-13",
        //         "value": "en-US-female-13"
        //     },
        //     {
        //         "name": "EN-US-FEMALE-14",
        //         "value": "en-US-female-14"
        //     },
        //     {
        //         "name": "EN-US-FEMALE-15",
        //         "value": "en-US-female-15"
        //     },
        //     {
        //         "name": "EN-US-FEMALE-16",
        //         "value": "en-US-female-16"
        //     },
        //     {
        //         "name": "EN-US-MALE-13",
        //         "value": "en-US-male-13"
        //     },
        //     {
        //         "name": "EN-US-MALE-14",
        //         "value": "en-US-male-14"
        //     },
        //     {
        //         "name": "EN-US-FEMALE-17",
        //         "value": "en-US-female-17"
        //     },
        //     {
        //         "name": "EN-US-FEMALE-18",
        //         "value": "en-US-female-18"
        //     },
        //     {
        //         "name": "EN-US-MALE-15",
        //         "value": "en-US-male-15"
        //     },
        //     {
        //         "name": "EN-US-MALE-16",
        //         "value": "en-US-male-16"
        //     },
        //     {
        //         "name": "EN-US-FEMALE-19",
        //         "value": "en-US-female-19"
        //     },
        //     {
        //         "name": "EN-US-FEMALE-20",
        //         "value": "en-US-female-20"
        //     },
        //     {
        //         "name": "EN-US-FEMALE-21",
        //         "value": "en-US-female-21"
        //     },
        //     {
        //         "name": "EN-US-FEMALE-22",
        //         "value": "en-US-female-22"
        //     },
        //     {
        //         "name": "EN-US-MALE-17",
        //         "value": "en-US-male-17"
        //     },
        //     {
        //         "name": "EN-US-MALE-18",
        //         "value": "en-US-male-18"
        //     },
        //     {
        //         "name": "EN-US-MALE-19",
        //         "value": "en-US-male-19"
        //     },
        //     {
        //         "name": "EN-US-MALE-20",
        //         "value": "en-US-male-20"
        //     },
        //     {
        //         "name": "EN-US-MALE-21",
        //         "value": "en-US-male-21"
        //     },
        //     {
        //         "name": "EN-US-FEMALE-23",
        //         "value": "en-US-female-23"
        //     },
        //     {
        //         "name": "EN-US-MALE-22",
        //         "value": "en-US-male-22"
        //     },
        //     {
        //         "name": "EN-US-MALE-23",
        //         "value": "en-US-male-23"
        //     },
        //     {
        //         "name": "EN-US-NEUTRAL-1",
        //         "value": "en-US-neutral-1"
        //     },
        //     {
        //         "name": "EN-US-MALE-24",
        //         "value": "en-US-male-24"
        //     },
        //     {
        //         "name": "EN-US-MALE-25",
        //         "value": "en-US-male-25"
        //     },
        //     {
        //         "name": "EN-US-MALE-26",
        //         "value": "en-US-male-26"
        //     },
        //     {
        //         "name": "EN-US-MALE-27",
        //         "value": "en-US-male-27"
        //     },
        //     {
        //         "name": "EN-US-FEMALE-24",
        //         "value": "en-US-female-24"
        //     },
        //     {
        //         "name": "EN-US-FEMALE-25",
        //         "value": "en-US-female-25"
        //     },
        //     {
        //         "name": "EN-US-FEMALE-26",
        //         "value": "en-US-female-26"
        //     },
        //     {
        //         "name": "EN-US-FEMALE-27",
        //         "value": "en-US-female-27"
        //     },
        //     {
        //         "name": "EN-US-MALE-28",
        //         "value": "en-US-male-28"
        //     },
        //     {
        //         "name": "EN-US-FEMALE-28",
        //         "value": "en-US-female-28"
        //     },
        //     {
        //         "name": "EN-US-FEMALE-29",
        //         "value": "en-US-female-29"
        //     },
        //     {
        //         "name": "EN-US-FEMALE-30",
        //         "value": "en-US-female-30"
        //     },
        //     {
        //         "name": "EN-US-MALE-29",
        //         "value": "en-US-male-29"
        //     },
        //     {
        //         "name": "EN-US-MALE-30",
        //         "value": "en-US-male-30"
        //     },
        //     {
        //         "name": "EN-ZA-FEMALE-1",
        //         "value": "en-ZA-female-1"
        //     },
        //     {
        //         "name": "EN-ZA-MALE-1",
        //         "value": "en-ZA-male-1"
        //     },
        //     {
        //         "name": "ES-AR-FEMALE-1",
        //         "value": "es-AR-female-1"
        //     },
        //     {
        //         "name": "ES-AR-MALE-1",
        //         "value": "es-AR-male-1"
        //     },
        //     {
        //         "name": "ES-BO-FEMALE-1",
        //         "value": "es-BO-female-1"
        //     },
        //     {
        //         "name": "ES-BO-MALE-1",
        //         "value": "es-BO-male-1"
        //     },
        //     {
        //         "name": "ES-CL-FEMALE-1",
        //         "value": "es-CL-female-1"
        //     },
        //     {
        //         "name": "ES-CL-MALE-1",
        //         "value": "es-CL-male-1"
        //     },
        //     {
        //         "name": "ES-CO-FEMALE-1",
        //         "value": "es-CO-female-1"
        //     },
        //     {
        //         "name": "ES-CO-MALE-1",
        //         "value": "es-CO-male-1"
        //     },
        //     {
        //         "name": "ES-CR-FEMALE-1",
        //         "value": "es-CR-female-1"
        //     },
        //     {
        //         "name": "ES-CR-MALE-1",
        //         "value": "es-CR-male-1"
        //     },
        //     {
        //         "name": "ES-CU-FEMALE-1",
        //         "value": "es-CU-female-1"
        //     },
        //     {
        //         "name": "ES-CU-MALE-1",
        //         "value": "es-CU-male-1"
        //     },
        //     {
        //         "name": "ES-DO-FEMALE-1",
        //         "value": "es-DO-female-1"
        //     },
        //     {
        //         "name": "ES-DO-MALE-1",
        //         "value": "es-DO-male-1"
        //     },
        //     {
        //         "name": "ES-EC-FEMALE-1",
        //         "value": "es-EC-female-1"
        //     },
        //     {
        //         "name": "ES-EC-MALE-1",
        //         "value": "es-EC-male-1"
        //     },
        //     {
        //         "name": "ES-ES-FEMALE-9",
        //         "value": "es-ES-female-9"
        //     },
        //     {
        //         "name": "ES-ES-MALE-10",
        //         "value": "es-ES-male-10"
        //     },
        //     {
        //         "name": "ES-ES-FEMALE-10",
        //         "value": "es-ES-female-10"
        //     },
        //     {
        //         "name": "ES-ES-MALE-11",
        //         "value": "es-ES-male-11"
        //     },
        //     {
        //         "name": "ES-ES-MALE-12",
        //         "value": "es-ES-male-12"
        //     },
        //     {
        //         "name": "ES-ES-MALE-13",
        //         "value": "es-ES-male-13"
        //     },
        //     {
        //         "name": "ES-ES-FEMALE-11",
        //         "value": "es-ES-female-11"
        //     },
        //     {
        //         "name": "ES-ES-FEMALE-12",
        //         "value": "es-ES-female-12"
        //     },
        //     {
        //         "name": "ES-ES-FEMALE-13",
        //         "value": "es-ES-female-13"
        //     },
        //     {
        //         "name": "ES-ES-FEMALE-14",
        //         "value": "es-ES-female-14"
        //     },
        //     {
        //         "name": "ES-ES-MALE-14",
        //         "value": "es-ES-male-14"
        //     },
        //     {
        //         "name": "ES-ES-MALE-15",
        //         "value": "es-ES-male-15"
        //     },
        //     {
        //         "name": "ES-ES-MALE-16",
        //         "value": "es-ES-male-16"
        //     },
        //     {
        //         "name": "ES-ES-FEMALE-15",
        //         "value": "es-ES-female-15"
        //     },
        //     {
        //         "name": "ES-ES-FEMALE-16",
        //         "value": "es-ES-female-16"
        //     },
        //     {
        //         "name": "ES-ES-FEMALE-17",
        //         "value": "es-ES-female-17"
        //     },
        //     {
        //         "name": "ES-ES-FEMALE-18",
        //         "value": "es-ES-female-18"
        //     },
        //     {
        //         "name": "ES-ES-FEMALE-19",
        //         "value": "es-ES-female-19"
        //     },
        //     {
        //         "name": "ES-ES-FEMALE-20",
        //         "value": "es-ES-female-20"
        //     },
        //     {
        //         "name": "ES-ES-FEMALE-21",
        //         "value": "es-ES-female-21"
        //     },
        //     {
        //         "name": "ES-ES-MALE-17",
        //         "value": "es-ES-male-17"
        //     },
        //     {
        //         "name": "ES-ES-MALE-18",
        //         "value": "es-ES-male-18"
        //     },
        //     {
        //         "name": "ES-ES-FEMALE-22",
        //         "value": "es-ES-female-22"
        //     },
        //     {
        //         "name": "ES-ES-FEMALE-23",
        //         "value": "es-ES-female-23"
        //     },
        //     {
        //         "name": "ES-GQ-FEMALE-1",
        //         "value": "es-GQ-female-1"
        //     },
        //     {
        //         "name": "ES-GQ-MALE-1",
        //         "value": "es-GQ-male-1"
        //     },
        //     {
        //         "name": "ES-GT-FEMALE-1",
        //         "value": "es-GT-female-1"
        //     },
        //     {
        //         "name": "ES-GT-MALE-1",
        //         "value": "es-GT-male-1"
        //     },
        //     {
        //         "name": "ES-HN-FEMALE-1",
        //         "value": "es-HN-female-1"
        //     },
        //     {
        //         "name": "ES-HN-MALE-1",
        //         "value": "es-HN-male-1"
        //     },
        //     {
        //         "name": "ES-MX-FEMALE-12",
        //         "value": "es-MX-female-12"
        //     },
        //     {
        //         "name": "ES-MX-MALE-11",
        //         "value": "es-MX-male-11"
        //     },
        //     {
        //         "name": "ES-MX-FEMALE-13",
        //         "value": "es-MX-female-13"
        //     },
        //     {
        //         "name": "ES-MX-FEMALE-14",
        //         "value": "es-MX-female-14"
        //     },
        //     {
        //         "name": "ES-MX-FEMALE-15",
        //         "value": "es-MX-female-15"
        //     },
        //     {
        //         "name": "ES-MX-MALE-12",
        //         "value": "es-MX-male-12"
        //     },
        //     {
        //         "name": "ES-MX-MALE-13",
        //         "value": "es-MX-male-13"
        //     },
        //     {
        //         "name": "ES-MX-FEMALE-16",
        //         "value": "es-MX-female-16"
        //     },
        //     {
        //         "name": "ES-MX-MALE-14",
        //         "value": "es-MX-male-14"
        //     },
        //     {
        //         "name": "ES-MX-MALE-15",
        //         "value": "es-MX-male-15"
        //     },
        //     {
        //         "name": "ES-MX-FEMALE-17",
        //         "value": "es-MX-female-17"
        //     },
        //     {
        //         "name": "ES-MX-FEMALE-18",
        //         "value": "es-MX-female-18"
        //     },
        //     {
        //         "name": "ES-MX-MALE-16",
        //         "value": "es-MX-male-16"
        //     },
        //     {
        //         "name": "ES-MX-FEMALE-19",
        //         "value": "es-MX-female-19"
        //     },
        //     {
        //         "name": "ES-MX-MALE-17",
        //         "value": "es-MX-male-17"
        //     },
        //     {
        //         "name": "ES-NI-FEMALE-1",
        //         "value": "es-NI-female-1"
        //     },
        //     {
        //         "name": "ES-NI-MALE-1",
        //         "value": "es-NI-male-1"
        //     },
        //     {
        //         "name": "ES-PA-FEMALE-1",
        //         "value": "es-PA-female-1"
        //     },
        //     {
        //         "name": "ES-PA-MALE-1",
        //         "value": "es-PA-male-1"
        //     },
        //     {
        //         "name": "ES-PE-FEMALE-1",
        //         "value": "es-PE-female-1"
        //     },
        //     {
        //         "name": "ES-PE-MALE-1",
        //         "value": "es-PE-male-1"
        //     },
        //     {
        //         "name": "ES-PR-FEMALE-1",
        //         "value": "es-PR-female-1"
        //     },
        //     {
        //         "name": "ES-PR-MALE-1",
        //         "value": "es-PR-male-1"
        //     },
        //     {
        //         "name": "ES-PY-FEMALE-1",
        //         "value": "es-PY-female-1"
        //     },
        //     {
        //         "name": "ES-PY-MALE-1",
        //         "value": "es-PY-male-1"
        //     },
        //     {
        //         "name": "ES-SV-FEMALE-1",
        //         "value": "es-SV-female-1"
        //     },
        //     {
        //         "name": "ES-SV-MALE-1",
        //         "value": "es-SV-male-1"
        //     },
        //     {
        //         "name": "ES-US-FEMALE-1",
        //         "value": "es-US-female-1"
        //     },
        //     {
        //         "name": "ES-US-MALE-1",
        //         "value": "es-US-male-1"
        //     },
        //     {
        //         "name": "ES-UY-FEMALE-1",
        //         "value": "es-UY-female-1"
        //     },
        //     {
        //         "name": "ES-UY-MALE-1",
        //         "value": "es-UY-male-1"
        //     },
        //     {
        //         "name": "ES-VE-FEMALE-1",
        //         "value": "es-VE-female-1"
        //     },
        //     {
        //         "name": "ES-VE-MALE-1",
        //         "value": "es-VE-male-1"
        //     },
        //     {
        //         "name": "ET-EE-FEMALE-11",
        //         "value": "et-EE-female-11"
        //     },
        //     {
        //         "name": "ET-EE-MALE-10",
        //         "value": "et-EE-male-10"
        //     },
        //     {
        //         "name": "EU-ES-FEMALE-11",
        //         "value": "eu-ES-female-11"
        //     },
        //     {
        //         "name": "EU-ES-MALE-10",
        //         "value": "eu-ES-male-10"
        //     },
        //     {
        //         "name": "FA-IR-FEMALE-11",
        //         "value": "fa-IR-female-11"
        //     },
        //     {
        //         "name": "FA-IR-MALE-10",
        //         "value": "fa-IR-male-10"
        //     },
        //     {
        //         "name": "FI-FI-FEMALE-12",
        //         "value": "fi-FI-female-12"
        //     },
        //     {
        //         "name": "FI-FI-MALE-11",
        //         "value": "fi-FI-male-11"
        //     },
        //     {
        //         "name": "FI-FI-FEMALE-13",
        //         "value": "fi-FI-female-13"
        //     },
        //     {
        //         "name": "FIL-PH-FEMALE-11",
        //         "value": "fil-PH-female-11"
        //     },
        //     {
        //         "name": "FIL-PH-MALE-10",
        //         "value": "fil-PH-male-10"
        //     },
        //     {
        //         "name": "FR-BE-FEMALE-12",
        //         "value": "fr-BE-female-12"
        //     },
        //     {
        //         "name": "FR-BE-MALE-11",
        //         "value": "fr-BE-male-11"
        //     },
        //     {
        //         "name": "FR-CA-FEMALE-12",
        //         "value": "fr-CA-female-12"
        //     },
        //     {
        //         "name": "FR-CA-MALE-11",
        //         "value": "fr-CA-male-11"
        //     },
        //     {
        //         "name": "FR-CA-MALE-12",
        //         "value": "fr-CA-male-12"
        //     },
        //     {
        //         "name": "FR-CA-MALE-13",
        //         "value": "fr-CA-male-13"
        //     },
        //     {
        //         "name": "FR-CH-FEMALE-12",
        //         "value": "fr-CH-female-12"
        //     },
        //     {
        //         "name": "FR-CH-MALE-11",
        //         "value": "fr-CH-male-11"
        //     },
        //     {
        //         "name": "FR-FR-FEMALE-12",
        //         "value": "fr-FR-female-12"
        //     },
        //     {
        //         "name": "FR-FR-MALE-11",
        //         "value": "fr-FR-male-11"
        //     },
        //     {
        //         "name": "FR-FR-MALE-12",
        //         "value": "fr-FR-male-12"
        //     },
        //     {
        //         "name": "FR-FR-FEMALE-13",
        //         "value": "fr-FR-female-13"
        //     },
        //     {
        //         "name": "FR-FR-FEMALE-14",
        //         "value": "fr-FR-female-14"
        //     },
        //     {
        //         "name": "FR-FR-MALE-13",
        //         "value": "fr-FR-male-13"
        //     },
        //     {
        //         "name": "FR-FR-FEMALE-15",
        //         "value": "fr-FR-female-15"
        //     },
        //     {
        //         "name": "FR-FR-FEMALE-16",
        //         "value": "fr-FR-female-16"
        //     },
        //     {
        //         "name": "FR-FR-FEMALE-17",
        //         "value": "fr-FR-female-17"
        //     },
        //     {
        //         "name": "FR-FR-MALE-14",
        //         "value": "fr-FR-male-14"
        //     },
        //     {
        //         "name": "FR-FR-FEMALE-18",
        //         "value": "fr-FR-female-18"
        //     },
        //     {
        //         "name": "FR-FR-MALE-15",
        //         "value": "fr-FR-male-15"
        //     },
        //     {
        //         "name": "FR-FR-MALE-16",
        //         "value": "fr-FR-male-16"
        //     },
        //     {
        //         "name": "FR-FR-MALE-17",
        //         "value": "fr-FR-male-17"
        //     },
        //     {
        //         "name": "FR-FR-FEMALE-19",
        //         "value": "fr-FR-female-19"
        //     },
        //     {
        //         "name": "FR-FR-FEMALE-20",
        //         "value": "fr-FR-female-20"
        //     },
        //     {
        //         "name": "FR-FR-MALE-18",
        //         "value": "fr-FR-male-18"
        //     },
        //     {
        //         "name": "FR-FR-FEMALE-21",
        //         "value": "fr-FR-female-21"
        //     },
        //     {
        //         "name": "FR-FR-MALE-19",
        //         "value": "fr-FR-male-19"
        //     },
        //     {
        //         "name": "FR-FR-MALE-20",
        //         "value": "fr-FR-male-20"
        //     },
        //     {
        //         "name": "GA-IE-FEMALE-12",
        //         "value": "ga-IE-female-12"
        //     },
        //     {
        //         "name": "GA-IE-MALE-12",
        //         "value": "ga-IE-male-12"
        //     },
        //     {
        //         "name": "GL-ES-FEMALE-12",
        //         "value": "gl-ES-female-12"
        //     },
        //     {
        //         "name": "GL-ES-MALE-12",
        //         "value": "gl-ES-male-12"
        //     },
        //     {
        //         "name": "GU-IN-FEMALE-1",
        //         "value": "gu-IN-female-1"
        //     },
        //     {
        //         "name": "GU-IN-MALE-1",
        //         "value": "gu-IN-male-1"
        //     },
        //     {
        //         "name": "HE-IL-FEMALE-12",
        //         "value": "he-IL-female-12"
        //     },
        //     {
        //         "name": "HE-IL-MALE-12",
        //         "value": "he-IL-male-12"
        //     },
        //     {
        //         "name": "HI-IN-FEMALE-13",
        //         "value": "hi-IN-female-13"
        //     },
        //     {
        //         "name": "HI-IN-MALE-13",
        //         "value": "hi-IN-male-13"
        //     },
        //     {
        //         "name": "HI-IN-MALE-14",
        //         "value": "hi-IN-male-14"
        //     },
        //     {
        //         "name": "HI-IN-FEMALE-14",
        //         "value": "hi-IN-female-14"
        //     },
        //     {
        //         "name": "HI-IN-FEMALE-15",
        //         "value": "hi-IN-female-15"
        //     },
        //     {
        //         "name": "HI-IN-MALE-15",
        //         "value": "hi-IN-male-15"
        //     },
        //     {
        //         "name": "HI-IN-MALE-16",
        //         "value": "hi-IN-male-16"
        //     },
        //     {
        //         "name": "HR-HR-FEMALE-12",
        //         "value": "hr-HR-female-12"
        //     },
        //     {
        //         "name": "HR-HR-MALE-12",
        //         "value": "hr-HR-male-12"
        //     },
        //     {
        //         "name": "HU-HU-FEMALE-13",
        //         "value": "hu-HU-female-13"
        //     },
        //     {
        //         "name": "HU-HU-MALE-13",
        //         "value": "hu-HU-male-13"
        //     },
        //     {
        //         "name": "HY-AM-FEMALE-12",
        //         "value": "hy-AM-female-12"
        //     },
        //     {
        //         "name": "HY-AM-MALE-12",
        //         "value": "hy-AM-male-12"
        //     },
        //     {
        //         "name": "ID-ID-FEMALE-13",
        //         "value": "id-ID-female-13"
        //     },
        //     {
        //         "name": "ID-ID-MALE-13",
        //         "value": "id-ID-male-13"
        //     },
        //     {
        //         "name": "IS-IS-FEMALE-12",
        //         "value": "is-IS-female-12"
        //     },
        //     {
        //         "name": "IS-IS-MALE-12",
        //         "value": "is-IS-male-12"
        //     },
        //     {
        //         "name": "IT-IT-FEMALE-13",
        //         "value": "it-IT-female-13"
        //     },
        //     {
        //         "name": "IT-IT-FEMALE-14",
        //         "value": "it-IT-female-14"
        //     },
        //     {
        //         "name": "IT-IT-MALE-13",
        //         "value": "it-IT-male-13"
        //     },
        //     {
        //         "name": "IT-IT-MALE-14",
        //         "value": "it-IT-male-14"
        //     },
        //     {
        //         "name": "IT-IT-MALE-15",
        //         "value": "it-IT-male-15"
        //     },
        //     {
        //         "name": "IT-IT-MALE-16",
        //         "value": "it-IT-male-16"
        //     },
        //     {
        //         "name": "IT-IT-FEMALE-15",
        //         "value": "it-IT-female-15"
        //     },
        //     {
        //         "name": "IT-IT-FEMALE-16",
        //         "value": "it-IT-female-16"
        //     },
        //     {
        //         "name": "IT-IT-MALE-17",
        //         "value": "it-IT-male-17"
        //     },
        //     {
        //         "name": "IT-IT-MALE-18",
        //         "value": "it-IT-male-18"
        //     },
        //     {
        //         "name": "IT-IT-FEMALE-17",
        //         "value": "it-IT-female-17"
        //     },
        //     {
        //         "name": "IT-IT-FEMALE-18",
        //         "value": "it-IT-female-18"
        //     },
        //     {
        //         "name": "IT-IT-MALE-19",
        //         "value": "it-IT-male-19"
        //     },
        //     {
        //         "name": "IT-IT-FEMALE-19",
        //         "value": "it-IT-female-19"
        //     },
        //     {
        //         "name": "IT-IT-FEMALE-20",
        //         "value": "it-IT-female-20"
        //     },
        //     {
        //         "name": "IT-IT-MALE-20",
        //         "value": "it-IT-male-20"
        //     },
        //     {
        //         "name": "IT-IT-MALE-21",
        //         "value": "it-IT-male-21"
        //     },
        //     {
        //         "name": "IT-IT-MALE-22",
        //         "value": "it-IT-male-22"
        //     },
        //     {
        //         "name": "IT-IT-MALE-23",
        //         "value": "it-IT-male-23"
        //     },
        //     {
        //         "name": "IT-IT-MALE-24",
        //         "value": "it-IT-male-24"
        //     },
        //     {
        //         "name": "IT-IT-FEMALE-21",
        //         "value": "it-IT-female-21"
        //     },
        //     {
        //         "name": "IT-IT-FEMALE-22",
        //         "value": "it-IT-female-22"
        //     },
        //     {
        //         "name": "IT-IT-MALE-25",
        //         "value": "it-IT-male-25"
        //     },
        //     {
        //         "name": "IT-IT-MALE-26",
        //         "value": "it-IT-male-26"
        //     },
        //     {
        //         "name": "IU-CANS-CA-FEMALE-1",
        //         "value": "iu-Cans-CA-female-1"
        //     },
        //     {
        //         "name": "IU-CANS-CA-MALE-1",
        //         "value": "iu-Cans-CA-male-1"
        //     },
        //     {
        //         "name": "IU-LATN-CA-FEMALE-1",
        //         "value": "iu-Latn-CA-female-1"
        //     },
        //     {
        //         "name": "IU-LATN-CA-MALE-1",
        //         "value": "iu-Latn-CA-male-1"
        //     },
        //     {
        //         "name": "JA-JP-FEMALE-14",
        //         "value": "ja-JP-female-14"
        //     },
        //     {
        //         "name": "JA-JP-MALE-16",
        //         "value": "ja-JP-male-16"
        //     },
        //     {
        //         "name": "JA-JP-FEMALE-15",
        //         "value": "ja-JP-female-15"
        //     },
        //     {
        //         "name": "JA-JP-MALE-17",
        //         "value": "ja-JP-male-17"
        //     },
        //     {
        //         "name": "JA-JP-FEMALE-16",
        //         "value": "ja-JP-female-16"
        //     },
        //     {
        //         "name": "JA-JP-MALE-18",
        //         "value": "ja-JP-male-18"
        //     },
        //     {
        //         "name": "JA-JP-FEMALE-17",
        //         "value": "ja-JP-female-17"
        //     },
        //     {
        //         "name": "JA-JP-MALE-19",
        //         "value": "ja-JP-male-19"
        //     },
        //     {
        //         "name": "JA-JP-MALE-20",
        //         "value": "ja-JP-male-20"
        //     },
        //     {
        //         "name": "JV-ID-FEMALE-13",
        //         "value": "jv-ID-female-13"
        //     },
        //     {
        //         "name": "JV-ID-MALE-16",
        //         "value": "jv-ID-male-16"
        //     },
        //     {
        //         "name": "KA-GE-FEMALE-13",
        //         "value": "ka-GE-female-13"
        //     },
        //     {
        //         "name": "KA-GE-MALE-16",
        //         "value": "ka-GE-male-16"
        //     },
        //     {
        //         "name": "KK-KZ-FEMALE-13",
        //         "value": "kk-KZ-female-13"
        //     },
        //     {
        //         "name": "KK-KZ-MALE-16",
        //         "value": "kk-KZ-male-16"
        //     },
        //     {
        //         "name": "KM-KH-FEMALE-13",
        //         "value": "km-KH-female-13"
        //     },
        //     {
        //         "name": "KM-KH-MALE-16",
        //         "value": "km-KH-male-16"
        //     },
        //     {
        //         "name": "KN-IN-FEMALE-13",
        //         "value": "kn-IN-female-13"
        //     },
        //     {
        //         "name": "KN-IN-MALE-16",
        //         "value": "kn-IN-male-16"
        //     },
        //     {
        //         "name": "KO-KR-FEMALE-14",
        //         "value": "ko-KR-female-14"
        //     },
        //     {
        //         "name": "KO-KR-MALE-17",
        //         "value": "ko-KR-male-17"
        //     },
        //     {
        //         "name": "KO-KR-MALE-18",
        //         "value": "ko-KR-male-18"
        //     },
        //     {
        //         "name": "KO-KR-MALE-19",
        //         "value": "ko-KR-male-19"
        //     },
        //     {
        //         "name": "KO-KR-MALE-20",
        //         "value": "ko-KR-male-20"
        //     },
        //     {
        //         "name": "KO-KR-FEMALE-15",
        //         "value": "ko-KR-female-15"
        //     },
        //     {
        //         "name": "KO-KR-FEMALE-16",
        //         "value": "ko-KR-female-16"
        //     },
        //     {
        //         "name": "KO-KR-FEMALE-17",
        //         "value": "ko-KR-female-17"
        //     },
        //     {
        //         "name": "KO-KR-FEMALE-18",
        //         "value": "ko-KR-female-18"
        //     },
        //     {
        //         "name": "KO-KR-MALE-21",
        //         "value": "ko-KR-male-21"
        //     },
        //     {
        //         "name": "KO-KR-MALE-22",
        //         "value": "ko-KR-male-22"
        //     },
        //     {
        //         "name": "LO-LA-FEMALE-13",
        //         "value": "lo-LA-female-13"
        //     },
        //     {
        //         "name": "LO-LA-MALE-17",
        //         "value": "lo-LA-male-17"
        //     },
        //     {
        //         "name": "LT-LT-FEMALE-13",
        //         "value": "lt-LT-female-13"
        //     },
        //     {
        //         "name": "LT-LT-MALE-17",
        //         "value": "lt-LT-male-17"
        //     },
        //     {
        //         "name": "LV-LV-FEMALE-13",
        //         "value": "lv-LV-female-13"
        //     },
        //     {
        //         "name": "LV-LV-MALE-17",
        //         "value": "lv-LV-male-17"
        //     },
        //     {
        //         "name": "MK-MK-FEMALE-13",
        //         "value": "mk-MK-female-13"
        //     },
        //     {
        //         "name": "MK-MK-MALE-17",
        //         "value": "mk-MK-male-17"
        //     },
        //     {
        //         "name": "ML-IN-FEMALE-13",
        //         "value": "ml-IN-female-13"
        //     },
        //     {
        //         "name": "ML-IN-MALE-17",
        //         "value": "ml-IN-male-17"
        //     },
        //     {
        //         "name": "MN-MN-FEMALE-13",
        //         "value": "mn-MN-female-13"
        //     },
        //     {
        //         "name": "MN-MN-MALE-17",
        //         "value": "mn-MN-male-17"
        //     },
        //     {
        //         "name": "MR-IN-FEMALE-1",
        //         "value": "mr-IN-female-1"
        //     },
        //     {
        //         "name": "MR-IN-MALE-1",
        //         "value": "mr-IN-male-1"
        //     },
        //     {
        //         "name": "MS-MY-FEMALE-13",
        //         "value": "ms-MY-female-13"
        //     },
        //     {
        //         "name": "MS-MY-MALE-17",
        //         "value": "ms-MY-male-17"
        //     },
        //     {
        //         "name": "MT-MT-FEMALE-13",
        //         "value": "mt-MT-female-13"
        //     },
        //     {
        //         "name": "MT-MT-MALE-17",
        //         "value": "mt-MT-male-17"
        //     },
        //     {
        //         "name": "MY-MM-FEMALE-13",
        //         "value": "my-MM-female-13"
        //     },
        //     {
        //         "name": "MY-MM-MALE-17",
        //         "value": "my-MM-male-17"
        //     },
        //     {
        //         "name": "NB-NO-FEMALE-14",
        //         "value": "nb-NO-female-14"
        //     },
        //     {
        //         "name": "NB-NO-MALE-18",
        //         "value": "nb-NO-male-18"
        //     },
        //     {
        //         "name": "NB-NO-FEMALE-15",
        //         "value": "nb-NO-female-15"
        //     },
        //     {
        //         "name": "NE-NP-FEMALE-13",
        //         "value": "ne-NP-female-13"
        //     },
        //     {
        //         "name": "NE-NP-MALE-17",
        //         "value": "ne-NP-male-17"
        //     },
        //     {
        //         "name": "NL-BE-FEMALE-14",
        //         "value": "nl-BE-female-14"
        //     },
        //     {
        //         "name": "NL-BE-MALE-18",
        //         "value": "nl-BE-male-18"
        //     },
        //     {
        //         "name": "NL-NL-FEMALE-14",
        //         "value": "nl-NL-female-14"
        //     },
        //     {
        //         "name": "NL-NL-MALE-18",
        //         "value": "nl-NL-male-18"
        //     },
        //     {
        //         "name": "NL-NL-FEMALE-15",
        //         "value": "nl-NL-female-15"
        //     },
        //     {
        //         "name": "OR-IN-FEMALE-1",
        //         "value": "or-IN-female-1"
        //     },
        //     {
        //         "name": "OR-IN-MALE-1",
        //         "value": "or-IN-male-1"
        //     },
        //     {
        //         "name": "PA-IN-MALE-1",
        //         "value": "pa-IN-male-1"
        //     },
        //     {
        //         "name": "PA-IN-FEMALE-1",
        //         "value": "pa-IN-female-1"
        //     },
        //     {
        //         "name": "PL-PL-FEMALE-14",
        //         "value": "pl-PL-female-14"
        //     },
        //     {
        //         "name": "PL-PL-MALE-18",
        //         "value": "pl-PL-male-18"
        //     },
        //     {
        //         "name": "PL-PL-FEMALE-15",
        //         "value": "pl-PL-female-15"
        //     },
        //     {
        //         "name": "PS-AF-FEMALE-13",
        //         "value": "ps-AF-female-13"
        //     },
        //     {
        //         "name": "PS-AF-MALE-17",
        //         "value": "ps-AF-male-17"
        //     },
        //     {
        //         "name": "PT-BR-FEMALE-14",
        //         "value": "pt-BR-female-14"
        //     },
        //     {
        //         "name": "PT-BR-MALE-18",
        //         "value": "pt-BR-male-18"
        //     },
        //     {
        //         "name": "PT-BR-FEMALE-15",
        //         "value": "pt-BR-female-15"
        //     },
        //     {
        //         "name": "PT-BR-MALE-19",
        //         "value": "pt-BR-male-19"
        //     },
        //     {
        //         "name": "PT-BR-FEMALE-16",
        //         "value": "pt-BR-female-16"
        //     },
        //     {
        //         "name": "PT-BR-MALE-20",
        //         "value": "pt-BR-male-20"
        //     },
        //     {
        //         "name": "PT-BR-FEMALE-17",
        //         "value": "pt-BR-female-17"
        //     },
        //     {
        //         "name": "PT-BR-MALE-21",
        //         "value": "pt-BR-male-21"
        //     },
        //     {
        //         "name": "PT-BR-MALE-22",
        //         "value": "pt-BR-male-22"
        //     },
        //     {
        //         "name": "PT-BR-FEMALE-18",
        //         "value": "pt-BR-female-18"
        //     },
        //     {
        //         "name": "PT-BR-FEMALE-19",
        //         "value": "pt-BR-female-19"
        //     },
        //     {
        //         "name": "PT-BR-FEMALE-20",
        //         "value": "pt-BR-female-20"
        //     },
        //     {
        //         "name": "PT-BR-MALE-23",
        //         "value": "pt-BR-male-23"
        //     },
        //     {
        //         "name": "PT-BR-FEMALE-21",
        //         "value": "pt-BR-female-21"
        //     },
        //     {
        //         "name": "PT-BR-MALE-24",
        //         "value": "pt-BR-male-24"
        //     },
        //     {
        //         "name": "PT-BR-FEMALE-22",
        //         "value": "pt-BR-female-22"
        //     },
        //     {
        //         "name": "PT-BR-MALE-25",
        //         "value": "pt-BR-male-25"
        //     },
        //     {
        //         "name": "PT-BR-MALE-26",
        //         "value": "pt-BR-male-26"
        //     },
        //     {
        //         "name": "PT-BR-FEMALE-23",
        //         "value": "pt-BR-female-23"
        //     },
        //     {
        //         "name": "PT-BR-FEMALE-24",
        //         "value": "pt-BR-female-24"
        //     },
        //     {
        //         "name": "PT-PT-FEMALE-15",
        //         "value": "pt-PT-female-15"
        //     },
        //     {
        //         "name": "PT-PT-MALE-19",
        //         "value": "pt-PT-male-19"
        //     },
        //     {
        //         "name": "PT-PT-FEMALE-16",
        //         "value": "pt-PT-female-16"
        //     },
        //     {
        //         "name": "RO-RO-FEMALE-14",
        //         "value": "ro-RO-female-14"
        //     },
        //     {
        //         "name": "RO-RO-MALE-18",
        //         "value": "ro-RO-male-18"
        //     },
        //     {
        //         "name": "RU-RU-FEMALE-15",
        //         "value": "ru-RU-female-15"
        //     },
        //     {
        //         "name": "RU-RU-MALE-19",
        //         "value": "ru-RU-male-19"
        //     },
        //     {
        //         "name": "RU-RU-FEMALE-16",
        //         "value": "ru-RU-female-16"
        //     },
        //     {
        //         "name": "SI-LK-FEMALE-14",
        //         "value": "si-LK-female-14"
        //     },
        //     {
        //         "name": "SI-LK-MALE-18",
        //         "value": "si-LK-male-18"
        //     },
        //     {
        //         "name": "SK-SK-FEMALE-14",
        //         "value": "sk-SK-female-14"
        //     },
        //     {
        //         "name": "SK-SK-MALE-18",
        //         "value": "sk-SK-male-18"
        //     },
        //     {
        //         "name": "SL-SI-FEMALE-14",
        //         "value": "sl-SI-female-14"
        //     },
        //     {
        //         "name": "SL-SI-MALE-18",
        //         "value": "sl-SI-male-18"
        //     },
        //     {
        //         "name": "SO-SO-FEMALE-14",
        //         "value": "so-SO-female-14"
        //     },
        //     {
        //         "name": "SO-SO-MALE-18",
        //         "value": "so-SO-male-18"
        //     },
        //     {
        //         "name": "SQ-AL-FEMALE-14",
        //         "value": "sq-AL-female-14"
        //     },
        //     {
        //         "name": "SQ-AL-MALE-18",
        //         "value": "sq-AL-male-18"
        //     },
        //     {
        //         "name": "SR-LATN-RS-MALE-1",
        //         "value": "sr-Latn-RS-male-1"
        //     },
        //     {
        //         "name": "SR-LATN-RS-FEMALE-1",
        //         "value": "sr-Latn-RS-female-1"
        //     },
        //     {
        //         "name": "SR-RS-FEMALE-14",
        //         "value": "sr-RS-female-14"
        //     },
        //     {
        //         "name": "SR-RS-MALE-18",
        //         "value": "sr-RS-male-18"
        //     },
        //     {
        //         "name": "SU-ID-FEMALE-14",
        //         "value": "su-ID-female-14"
        //     },
        //     {
        //         "name": "SU-ID-MALE-18",
        //         "value": "su-ID-male-18"
        //     },
        //     {
        //         "name": "SV-SE-FEMALE-15",
        //         "value": "sv-SE-female-15"
        //     },
        //     {
        //         "name": "SV-SE-MALE-19",
        //         "value": "sv-SE-male-19"
        //     },
        //     {
        //         "name": "SV-SE-FEMALE-16",
        //         "value": "sv-SE-female-16"
        //     },
        //     {
        //         "name": "SW-KE-FEMALE-14",
        //         "value": "sw-KE-female-14"
        //     },
        //     {
        //         "name": "SW-KE-MALE-18",
        //         "value": "sw-KE-male-18"
        //     },
        //     {
        //         "name": "SW-TZ-FEMALE-1",
        //         "value": "sw-TZ-female-1"
        //     },
        //     {
        //         "name": "SW-TZ-MALE-1",
        //         "value": "sw-TZ-male-1"
        //     },
        //     {
        //         "name": "TA-IN-FEMALE-14",
        //         "value": "ta-IN-female-14"
        //     },
        //     {
        //         "name": "TA-IN-MALE-18",
        //         "value": "ta-IN-male-18"
        //     },
        //     {
        //         "name": "TA-LK-FEMALE-1",
        //         "value": "ta-LK-female-1"
        //     },
        //     {
        //         "name": "TA-LK-MALE-1",
        //         "value": "ta-LK-male-1"
        //     },
        //     {
        //         "name": "TA-MY-FEMALE-1",
        //         "value": "ta-MY-female-1"
        //     },
        //     {
        //         "name": "TA-MY-MALE-1",
        //         "value": "ta-MY-male-1"
        //     },
        //     {
        //         "name": "TA-SG-FEMALE-1",
        //         "value": "ta-SG-female-1"
        //     },
        //     {
        //         "name": "TA-SG-MALE-1",
        //         "value": "ta-SG-male-1"
        //     },
        //     {
        //         "name": "TE-IN-FEMALE-14",
        //         "value": "te-IN-female-14"
        //     },
        //     {
        //         "name": "TE-IN-MALE-18",
        //         "value": "te-IN-male-18"
        //     },
        //     {
        //         "name": "TH-TH-FEMALE-15",
        //         "value": "th-TH-female-15"
        //     },
        //     {
        //         "name": "TH-TH-MALE-19",
        //         "value": "th-TH-male-19"
        //     },
        //     {
        //         "name": "TH-TH-FEMALE-16",
        //         "value": "th-TH-female-16"
        //     },
        //     {
        //         "name": "TR-TR-FEMALE-15",
        //         "value": "tr-TR-female-15"
        //     },
        //     {
        //         "name": "TR-TR-MALE-19",
        //         "value": "tr-TR-male-19"
        //     },
        //     {
        //         "name": "UK-UA-FEMALE-14",
        //         "value": "uk-UA-female-14"
        //     },
        //     {
        //         "name": "UK-UA-MALE-18",
        //         "value": "uk-UA-male-18"
        //     },
        //     {
        //         "name": "UR-IN-FEMALE-1",
        //         "value": "ur-IN-female-1"
        //     },
        //     {
        //         "name": "UR-IN-MALE-1",
        //         "value": "ur-IN-male-1"
        //     },
        //     {
        //         "name": "UR-PK-FEMALE-14",
        //         "value": "ur-PK-female-14"
        //     },
        //     {
        //         "name": "UR-PK-MALE-18",
        //         "value": "ur-PK-male-18"
        //     },
        //     {
        //         "name": "UZ-UZ-FEMALE-14",
        //         "value": "uz-UZ-female-14"
        //     },
        //     {
        //         "name": "UZ-UZ-MALE-18",
        //         "value": "uz-UZ-male-18"
        //     },
        //     {
        //         "name": "VI-VN-FEMALE-14",
        //         "value": "vi-VN-female-14"
        //     },
        //     {
        //         "name": "VI-VN-MALE-18",
        //         "value": "vi-VN-male-18"
        //     },
        //     {
        //         "name": "WUU-CN-FEMALE-1",
        //         "value": "wuu-CN-female-1"
        //     },
        //     {
        //         "name": "WUU-CN-MALE-1",
        //         "value": "wuu-CN-male-1"
        //     },
        //     {
        //         "name": "YUE-CN-FEMALE-1",
        //         "value": "yue-CN-female-1"
        //     },
        //     {
        //         "name": "YUE-CN-MALE-1",
        //         "value": "yue-CN-male-1"
        //     },
        //     {
        //         "name": "ZH-CN-FEMALE-15",
        //         "value": "zh-CN-female-15"
        //     },
        //     {
        //         "name": "ZH-CN-MALE-19",
        //         "value": "zh-CN-male-19"
        //     },
        //     {
        //         "name": "ZH-CN-MALE-20",
        //         "value": "zh-CN-male-20"
        //     },
        //     {
        //         "name": "ZH-CN-FEMALE-16",
        //         "value": "zh-CN-female-16"
        //     },
        //     {
        //         "name": "ZH-CN-MALE-21",
        //         "value": "zh-CN-male-21"
        //     },
        //     {
        //         "name": "ZH-CN-FEMALE-17",
        //         "value": "zh-CN-female-17"
        //     },
        //     {
        //         "name": "ZH-CN-FEMALE-18",
        //         "value": "zh-CN-female-18"
        //     },
        //     {
        //         "name": "ZH-CN-FEMALE-19",
        //         "value": "zh-CN-female-19"
        //     },
        //     {
        //         "name": "ZH-CN-FEMALE-20",
        //         "value": "zh-CN-female-20"
        //     },
        //     {
        //         "name": "ZH-CN-FEMALE-21",
        //         "value": "zh-CN-female-21"
        //     },
        //     {
        //         "name": "ZH-CN-FEMALE-22",
        //         "value": "zh-CN-female-22"
        //     },
        //     {
        //         "name": "ZH-CN-FEMALE-23",
        //         "value": "zh-CN-female-23"
        //     },
        //     {
        //         "name": "ZH-CN-FEMALE-24",
        //         "value": "zh-CN-female-24"
        //     },
        //     {
        //         "name": "ZH-CN-FEMALE-25",
        //         "value": "zh-CN-female-25"
        //     },
        //     {
        //         "name": "ZH-CN-FEMALE-26",
        //         "value": "zh-CN-female-26"
        //     },
        //     {
        //         "name": "ZH-CN-FEMALE-27",
        //         "value": "zh-CN-female-27"
        //     },
        //     {
        //         "name": "ZH-CN-FEMALE-28",
        //         "value": "zh-CN-female-28"
        //     },
        //     {
        //         "name": "ZH-CN-FEMALE-29",
        //         "value": "zh-CN-female-29"
        //     },
        //     {
        //         "name": "ZH-CN-FEMALE-30",
        //         "value": "zh-CN-female-30"
        //     },
        //     {
        //         "name": "ZH-CN-FEMALE-31",
        //         "value": "zh-CN-female-31"
        //     },
        //     {
        //         "name": "ZH-CN-FEMALE-32",
        //         "value": "zh-CN-female-32"
        //     },
        //     {
        //         "name": "ZH-CN-FEMALE-33",
        //         "value": "zh-CN-female-33"
        //     },
        //     {
        //         "name": "ZH-CN-FEMALE-34",
        //         "value": "zh-CN-female-34"
        //     },
        //     {
        //         "name": "ZH-CN-MALE-22",
        //         "value": "zh-CN-male-22"
        //     },
        //     {
        //         "name": "ZH-CN-MALE-23",
        //         "value": "zh-CN-male-23"
        //     },
        //     {
        //         "name": "ZH-CN-MALE-24",
        //         "value": "zh-CN-male-24"
        //     },
        //     {
        //         "name": "ZH-CN-MALE-25",
        //         "value": "zh-CN-male-25"
        //     },
        //     {
        //         "name": "ZH-CN-MALE-26",
        //         "value": "zh-CN-male-26"
        //     },
        //     {
        //         "name": "ZH-CN-MALE-27",
        //         "value": "zh-CN-male-27"
        //     },
        //     {
        //         "name": "ZH-CN-MALE-28",
        //         "value": "zh-CN-male-28"
        //     },
        //     {
        //         "name": "ZH-CN-MALE-29",
        //         "value": "zh-CN-male-29"
        //     },
        //     {
        //         "name": "ZH-CN-MALE-30",
        //         "value": "zh-CN-male-30"
        //     },
        //     {
        //         "name": "ZH-CN-MALE-31",
        //         "value": "zh-CN-male-31"
        //     },
        //     {
        //         "name": "ZH-CN-MALE-32",
        //         "value": "zh-CN-male-32"
        //     },
        //     {
        //         "name": "ZH-CN-MALE-33",
        //         "value": "zh-CN-male-33"
        //     },
        //     {
        //         "name": "ZH-CN-GUANGXI-MALE-1",
        //         "value": "zh-CN-guangxi-male-1"
        //     },
        //     {
        //         "name": "ZH-CN-HENAN-MALE-1",
        //         "value": "zh-CN-henan-male-1"
        //     },
        //     {
        //         "name": "ZH-CN-LIAONING-FEMALE-2",
        //         "value": "zh-CN-liaoning-female-2"
        //     },
        //     {
        //         "name": "ZH-CN-LIAONING-MALE-1",
        //         "value": "zh-CN-liaoning-male-1"
        //     },
        //     {
        //         "name": "ZH-CN-SHAANXI-FEMALE-2",
        //         "value": "zh-CN-shaanxi-female-2"
        //     },
        //     {
        //         "name": "ZH-CN-SHANDONG-MALE-1",
        //         "value": "zh-CN-shandong-male-1"
        //     },
        //     {
        //         "name": "ZH-CN-SICHUAN-MALE-1",
        //         "value": "zh-CN-sichuan-male-1"
        //     },
        //     {
        //         "name": "ZH-HK-FEMALE-18",
        //         "value": "zh-HK-female-18"
        //     },
        //     {
        //         "name": "ZH-HK-MALE-22",
        //         "value": "zh-HK-male-22"
        //     },
        //     {
        //         "name": "ZH-HK-FEMALE-19",
        //         "value": "zh-HK-female-19"
        //     },
        //     {
        //         "name": "ZH-TW-FEMALE-19",
        //         "value": "zh-TW-female-19"
        //     },
        //     {
        //         "name": "ZH-TW-MALE-22",
        //         "value": "zh-TW-male-22"
        //     },
        //     {
        //         "name": "ZH-TW-FEMALE-20",
        //         "value": "zh-TW-female-20"
        //     },
        //     {
        //         "name": "ZU-ZA-FEMALE-17",
        //         "value": "zu-ZA-female-17"
        //     },
        //     {
        //         "name": "ZU-ZA-MALE-21",
        //         "value": "zu-ZA-male-21"
        //     },
        // ],
        // default: undefined,
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
        displayName: "Return Type",
        name: "return_type",
        type: "options",
        default: "url",
        displayOptions: {
            show: {
                operation: ['text-to-speech'],
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
        description: 'Return format for the audio file',
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

