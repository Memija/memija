import { Component, OnInit } from '@angular/core';
import { configuration } from 'src/app/configuration/configuration';
import { languages } from 'src/app/localization/languages/languages';
import { language } from 'src/app/localization/language';

/**
 * Header component.
 */
@Component({
  selector: 'memija-common-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.less'
  ]
})
export class HeaderComponent implements OnInit {
  /**
   * Application logo.
   */
  public logo!: string;

  /**
   * Application name.
   */
  public name!: string;

  /**
   * Application slogan.
   */
  public slogan!: string;

  /**
   * English language marker.
   */
  public englishLanguage!: string;

  /**
   * German language marker.
   */
   public germanLanguage!: string;

  /**
   * Declares if English language is selected or not.
   */
  public isEnglishLanguageSelected!: boolean;

  /**
   * Declares if German language is selected or not.
   */
  public isGermanLanguageSelected!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.logo = '../../../../assets/images/logo/memija.png';
    this.name = configuration.brand.name;
    this.slogan = language.slogan;
    this.englishLanguage = languages.english;
    this.germanLanguage = languages.german;
    this.isEnglishLanguageSelected = configuration.language.isEnglishLanguageSelected;
    this.isGermanLanguageSelected = configuration.language.isGermanLanguageSelected;
  }

  /**
   * Set active language to English.
   */
  public setActiveLanguageToEnglish(): void {
    this.setActiveLanguage(languages.english);
  }

  /**
   * Set active language to German.
   */
  public setActiveLanguageToGerman(): void {
    this.setActiveLanguage(languages.german);
  }

  private setActiveLanguage(languageValue: string): void {
    localStorage[configuration.language.localStorageMarker] = languageValue;
    location.reload();
  }
}
