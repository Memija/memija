import { Component, OnInit } from '@angular/core';
import { configuration } from 'src/app/configuration/configuration';

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
  public logo: string;

  /**
   * Application name.
   */
  public name: string;

  /**
   * Application slogan.
   */
  public slogan: string;

  constructor() { }

  ngOnInit(): void {
    this.logo = '../../../../assets/images/logo/memija.png';
    this.name = configuration.brand.name;
    this.slogan = configuration.brand.slogan;
  }
}
