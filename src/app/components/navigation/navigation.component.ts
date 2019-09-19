import { Component, OnInit } from '@angular/core';
import { configuration } from 'src/app/configuration/configuration';

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
  public homeRouteName: string;

  /**
   * Home route value.
   */
  public homeRouteValue: string;

  /**
   * Knowledge base route name.
   */
  public knowledgeBaseRouteName: string;

  /**
   * Knowledge base route name.
   */
  public knowledgeBaseRouteValue: string;

  constructor() { }

  ngOnInit(): void {
    this.homeRouteName = configuration.route.name.home;
    this.homeRouteValue = configuration.route.value.home;
    this.knowledgeBaseRouteName = configuration.route.name.knowledgeBase;
    this.knowledgeBaseRouteValue = configuration.route.value.knowledgeBase;
  }
}
