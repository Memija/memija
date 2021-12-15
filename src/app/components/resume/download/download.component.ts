import { Component, OnInit } from '@angular/core';
import { configuration } from 'src/app/configuration/configuration';
import { languages } from 'src/app/localization/languages/languages';
import { language } from 'src/app/localization/language';

@Component({
  selector: 'memija-resume-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.less']
})
export class ResumeDownloadComponent implements OnInit {
  /**
   * File name.
   */
  public fileName!: string;

  /**
   * Title.
   */
  public title!: string;

  /**
   * URL (Uniform Resource Locator).
   */
  public url!: string;

  constructor() { }

  ngOnInit() {
    this.fileName = language.resume.download.fileName;
    this.title = language.resume.download.title;
    this.url = configuration.language.activeLanguage === languages.german ? '../../../../assets/files/resume/deutch/Resume.pdf' : '../../../../assets/files/resume/english/Resume.pdf';
  }
}
