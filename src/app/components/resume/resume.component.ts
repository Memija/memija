import { Component, OnInit } from '@angular/core';
import { language } from 'src/app/localization/language';

@Component({
  selector: 'memija-resume',
  templateUrl: './resume.component.html'
})
export class ResumeComponent implements OnInit {
  /**
   * Education.
   */
  public education!: string;

  /**
   * Key points.
   */
  public keyPoints!: string;

  /**
   * Professional experience.
   */
  public professionalExperience!: string;

  ngOnInit() {
    this.education = language.resume.headers.education.toUpperCase();
    this.keyPoints = language.resume.headers.keyPoints.toUpperCase();
    this.professionalExperience = language.resume.headers.professionalExperience.toUpperCase();
  }
}
