import { Component, OnInit } from '@angular/core';
import { configuration } from 'src/app/configuration/configuration';
import { DateUtility } from 'src/app/utils/date.utility';

/**
 * Footer component.
 */
@Component({
  selector: 'memija-common-footer',
  templateUrl: './footer.component.html',
  styleUrls: [
    './footer.component.less'
  ]
})
export class FooterComponent implements OnInit {
  /**
   * Contact email.
   */
  public email: String;

  /**
   * Application name.
   */
  public name: String;

  /**
   * Application version.
   */
  public version: String;

  /**
   * Current year.
   */
  public year: Number;

  constructor() { }

  ngOnInit(): void {
    this.email = configuration.contact.email;
    this.name = configuration.brand.name;
    this.version = configuration.version;
    this.year = DateUtility.getCurrentYearValue();
  }
}
