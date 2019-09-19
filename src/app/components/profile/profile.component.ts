import { Component, OnInit } from '@angular/core';
import { configuration } from 'src/app/configuration/configuration';

@Component({
  selector: 'memija-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  /**
   * LinkedIn link.
   */
  public linkedInLink: string;

  /**
   * Profile photo.
   */
  public profilePhoto: string;

  constructor() { }

  ngOnInit() {
    this.linkedInLink = configuration.linkedIn.profile;
    this.profilePhoto = '../../../assets/images/person/anel-memic.jpg';
  }
}
