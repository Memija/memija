import { configuration } from '../configuration/configuration';
import { languages } from './languages/languages';
import { englishLanguage } from './languages/english-language';
import { germanLanguage } from './languages/german-language';

export const language = configuration.language.activeLanguage === languages.german ? germanLanguage : englishLanguage;
