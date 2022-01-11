import { Component, OnInit } from '@angular/core';
import { language } from 'src/app/localization/language';
import { Education } from 'src/app/models/resume/Education';

@Component({
  selector: 'memija-resume-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.less']
})
export class EducationComponent implements OnInit {
  /**
   * Degree.
   */
  public degree!: string;

  /**
   * ECTS (European Credit Transfer System).
   */
  public ects!: string;

  /**
   * Education.
   */
   public education!: Array<Education>;

  /**
   * Name of the university.
   */
   public university!: string;

  ngOnInit() {
    this.degree = language.resume.educationSetup.degree;
    this.ects = language.resume.educationSetup.ects;
    this.education = language.resume.education;
    this.university = language.resume.educationSetup.university;
  }
}
