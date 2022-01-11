import { Component, OnInit } from '@angular/core';
import { configuration } from 'src/app/configuration/configuration';
import { language } from 'src/app/localization/language';

@Component({
  selector: 'memija-profile',
  templateUrl: './profile.component.html',
  styleUrls: [
    './profile.component.less'
  ]
})
export class ProfileComponent implements OnInit {
  /**
   * Introduction.
   */
  public introduction!: string;

  /**
   * LinkedIn link.
   */
  public linkedInLink!: string;

  /**
   * Profile photo.
   */
  public profilePhoto!: string;

  /**
   * Summary.
   */
  public summary!: string;

  ngOnInit() {
    this.introduction = language.profile.introduction;
    this.linkedInLink = configuration.linkedIn.profile;
    this.profilePhoto = '../../../assets/images/person/anel-memic.jpg';
    this.summary = language.profile.summary;
  }
}
