import { Component, OnInit } from '@angular/core';
import { configuration } from 'src/app/configuration/configuration';
import { language } from 'src/app/localization/language';

/**
 * Navigation component.
 */
@Component({
  selector: 'memija-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: [
    './navigation.component.less'
  ]
})
export class NavigationComponent implements OnInit {
  /**
   * Home route name.
   */
  public homeRouteName!: string;

  /**
   * Home route value.
   */
  public homeRouteValue!: string;

  /**
   * Knowledge base route name.
   */
  public knowledgeBaseRouteName!: string;

  /**
   * Knowledge base route value.
   */
  public knowledgeBaseRouteValue!: string;

  /**
   * Projects route name.
   */
  public projectsRouteName!: string;

  /**
   * Projects route value.
   */
  public projectsRouteValue!: string;

  constructor() { }

  ngOnInit(): void {
    this.homeRouteName = language.route.name.home;
    this.homeRouteValue = configuration.route.value.home;
    this.knowledgeBaseRouteName = language.route.name.knowledgeBase;
    this.knowledgeBaseRouteValue = configuration.route.value.knowledgeBase;
    this.projectsRouteName = language.route.name.projects;
    this.projectsRouteValue = configuration.route.value.projects;
  }
}
