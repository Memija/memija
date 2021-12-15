import { Component, OnInit } from '@angular/core';
import { configuration } from 'src/app/configuration/configuration';

@Component({
  selector: 'memija-projects',
  templateUrl: './projects.component.html',
  styleUrls: [
    './projects.component.less'
  ]
})
export class ProjectsComponent implements OnInit {
  /**
   * Memija Typography project title.
   */
  public memijaTypographyTitle!: string;

  /**
   * Memija Typography project URL (Uniform Resource Locator).
   */
  public memijaTypographyURL!: string;

  constructor() { }

  ngOnInit() {
    this.memijaTypographyTitle = configuration.projects.memijaTypography.title;
    this.memijaTypographyURL = configuration.projects.memijaTypography.url;
  }
}
