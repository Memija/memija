import { Component, OnInit } from '@angular/core';
import { language } from 'src/app/localization/language';
import { ProfessionalExperience } from 'src/app/models/resume/ProfessionalExperience';

@Component({
  selector: 'memija-resume-professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.less']
})
export class ProfessionalExperienceComponent implements OnInit {
  /**
   * Company.
   */
  public company!: string;

  /**
   * Position.
   */
  public position!: string;

  /**
   * Professional experience.
   */
   public professionalExperience!: Array<ProfessionalExperience>;

  constructor() { }

  ngOnInit() {
    this.company = language.resume.professionalExperienceSetup.company;
    this.position = language.resume.professionalExperienceSetup.position;
    this.professionalExperience = language.resume.professionalExperience;
  }
}
