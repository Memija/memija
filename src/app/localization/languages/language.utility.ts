import { languages } from './languages';

/**
 * Language utility.
 */
 export class LanguageUtility {

  /**
   * Get active languge value.
   * @returns Active languge value.
   */
  static getActiveLanguageValue(): String {
    return this.getActiveLanguage();
  }

  /**
   * Declares if English language is selected or not.
   * @returns Confirmation if English language is selected or not.
   */
  static isEnglishLanguageSelected(): boolean {
    return this.getActiveLanguage() === languages.english;
  }

  /**
   * Declares if German language is selected or not.
   * @returns Confirmation if German language is selected or not.
   */
  static isGermanLanguageSelected(): boolean {
    return this.getActiveLanguage() === languages.german;
  }

  private static getActiveLanguage(): string {
    const localStorageMarker = 'language';
    if (localStorage[localStorageMarker]) {
      return localStorage[localStorageMarker];
    } else if (navigator.language === languages.germanStandards.deutchland ||
               navigator.language === languages.germanStandards.schweiz ||
               navigator.language === languages.germanStandards.österreich ||
               navigator.language === languages.germanStandards.luxemburg ||
               navigator.language === languages.germanStandards.liechtenstein) {
      return languages.german;
    } else {
      return languages.english;
    }
  }
}
