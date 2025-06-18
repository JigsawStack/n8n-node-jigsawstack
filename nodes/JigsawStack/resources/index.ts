import { TranslateText } from './translate/text';
import { TranslateImage } from './translate/image';
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
import { TextToSql } from './data/texttosql';
import { WebSuggestion } from './websearch/websuggestion';
import { WebScrape } from './scrape/webscrape';
import { Vocr } from './vision/vocr';
import { ObjectDetection } from './vision/objectdetection';
import { STT } from './speechtotext/stt';

export const resources = [
    ...TranslateText,
    ...WebSearch,
    ...Embedding,
    ...Sentiment,
    ...TTS,
    ...STT,
    ...Image,
    ...NSFW,
    ...Profanity,
    ...Spell,
    ...Spam,
    ...Summary,
    ...Prediction,
    ...TextToSql,
    ...WebSuggestion,
    ...WebScrape,
    ...Vocr,
    ...TranslateImage,
    ...ObjectDetection,
];      