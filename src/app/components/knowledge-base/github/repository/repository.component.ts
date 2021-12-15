import { Component, OnInit } from '@angular/core';
import { language } from 'src/app/localization/language';
import { GitHubRepository } from 'src/app/models/github';
import { GitHubService } from 'src/app/services/github/github.service';

/**
 * Repository component.
 */
@Component({
  selector: 'memija-knowledge-base-github-repository',
  templateUrl: './repository.component.html',
  styleUrls: [
    '../github.component.less'
  ]
})
export class RepositoryComponent implements OnInit {
  /**
   * Error message.
   */
  public errorMessage!: string;

  /**
   * GitHub gists or error.
   */
  public gitHubRepositories!: GitHubRepository[] | Error;

  /**
   * No description available placeholder.
   */
  public noDescriptionAvailablePlaceholder!: string;

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

    this.gitHubService.getGitHubRepositories().subscribe({
      next: (data) => {
        this.gitHubRepositories = data;
      }, error: (error) => {
        this.errorMessage = error.message;
    }});
    this.noDescriptionAvailablePlaceholder = language.knowledgeBase.noDescriptionAvailablePlaceholder;
    this.searchPlaceholder = language.knowledgeBase.searchPlaceholder.repositories;
    this.searchTerm = '';
  }
}
