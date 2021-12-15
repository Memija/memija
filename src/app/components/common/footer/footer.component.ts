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
  public email!: string;

  /**
   * Application name.
   */
  public name!: string;

  /**
   * Application version.
   */
  public version!: string;

  /**
   * Current year.
   */
  public year!: number;

  constructor() { }

  ngOnInit(): void {
    this.email = configuration.contact.email;
    this.name = configuration.brand.name;
    this.version = configuration.version;
    this.year = DateUtility.getCurrentYearValue();
  }
}
