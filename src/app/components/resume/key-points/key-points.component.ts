import { Component, OnInit } from '@angular/core';
import { language } from 'src/app/localization/language';

@Component({
  selector: 'memija-resume-key-points',
  templateUrl: './key-points.component.html',
  styleUrls: ['./key-points.component.less']
})
export class KeyPointsComponent implements OnInit {
  /**
   * Key points.
   */
  public keyPoints!: Array<String>;

  constructor() { }

  ngOnInit() {
    this.keyPoints = language.resume.keyPoints;
  }
}
