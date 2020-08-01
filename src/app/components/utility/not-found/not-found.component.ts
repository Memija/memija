import { Component, OnInit } from '@angular/core';
import { language } from 'src/app/localization/language';

/**
 * Not found component.
 */
@Component({
  selector: 'memija-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: [
    './not-found.component.less'
  ]
})
export class NotFoundComponent implements OnInit {
  /**
   * Not found message.
   */
  public notFoundMessage: string;

  constructor() { }

  ngOnInit(): void {
    this.notFoundMessage = language.notFoundMessage;
  }
}
