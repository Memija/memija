import { Component, OnInit } from '@angular/core';
import { configuration } from 'src/app/configuration/configuration';

/**
 * Knowledge base component.
 */
@Component({
  selector: 'memija-knowledge-base',
  templateUrl: './knowledge-base.component.html',
  styleUrls: [
    './knowledge-base.component.less'
  ]
})
export class KnowledgeBaseComponent implements OnInit {
  /**
   * Title.
   */
  public title: string;

  /**
   * Declares should GitHub gists be shown or not.
   */
  public shouldGistsBeShown: boolean;

  /**
   * Declares should GitHub repositories be shown or not.
   */
  public shouldRepositoriesBeShown: boolean;

  constructor() { }

  ngOnInit(): void {
    this.title = configuration.route.name.knowledgeBase;
    this.shouldGistsBeShown = false;
    this.shouldRepositoriesBeShown = true;
  }

  /**
   * Show gists and hide repositories.
   */
  public showGists(): void {
    this.shouldGistsBeShown = true;
    this.shouldRepositoriesBeShown = false;
  }

  /**
   * Show repositories and hide gists.
   */
  public showRepositories(): void {
    this.shouldGistsBeShown = false;
    this.shouldRepositoriesBeShown = true;
  }
}
