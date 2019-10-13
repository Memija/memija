import { Component, OnInit } from '@angular/core';
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
  public fileName: string;

  /**
   * Title.
   */
  public title: string;

  /**
   * URL (Uniform Resource Locator).
   */
  public url: string;

  constructor() { }

  ngOnInit() {
    this.fileName = language.resume.download.fileName;
    this.title = language.resume.download.title;
    this.url = '../../../../assets/files/resume/Resume.pdf';
  }
}
