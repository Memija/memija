import { Component, OnInit } from '@angular/core';
import { language } from 'src/app/localization/language';
import { GitHubGist } from 'src/app/models/github';
import { GitHubService } from 'src/app/services/github/github.service';

/**
 * Gist component.
 */
@Component({
  selector: 'memija-knowledge-base-github-gist',
  templateUrl: './gist.component.html',
  styleUrls: [
    '../github.component.less'
  ]
})
export class GistComponent implements OnInit {
  /**
   * Error message.
   */
  public errorMessage!: string;

  /**
   * GitHub gists or error.
   */
  public gitHubGists!: GitHubGist[] | Error;

  /**
   * Search placeholder.
   */
   public searchPlaceholder!: string;

  /**
   * Search term.
   */
  public searchTerm!: string;

  constructor(private gitHubService: GitHubService) { }

  ngOnInit(): void {

    this.gitHubService.getGitHubGists().subscribe({
      next: (data) => {
        this.gitHubGists = data;
      }, error: (error) => {
        this.errorMessage = error.message;
    }});
    this.searchPlaceholder = language.knowledgeBase.searchPlaceholder.gists;
    this.searchTerm = '';
  }
}
