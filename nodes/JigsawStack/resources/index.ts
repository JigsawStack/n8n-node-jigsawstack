import {  TranslateText } from './translate/text';
import { WebSearch } from './websearch/websearch';
import { Embedding } from './data/embedding';
import { Sentiment } from './coreai/sentiment';
import { TTS } from './texttospeech/tts';
import { Image } from './coreai/image';
import { NSFW } from './validate/nsfw';
import { Profanity } from './validate/profanity';
import { Spell } from './validate/spell';
import { Spam } from './validate/spam';
import { Summary } from './coreai/summary';
import { Prediction } from './data/prediction';

export const resources = [
    ...TranslateText,   
    ...WebSearch,
    ...Embedding,
    ...Sentiment,
    ...TTS,
    ...Image,
    ...NSFW,
    ...Profanity,
    ...Spell,
    ...Spam,
    ...Summary,
    ...Prediction,
];