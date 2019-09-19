import { Component } from '@angular/core';

@Component({
  selector: 'memija-root',
  template: `
    <memija-common-header></memija-common-header>
    <memija-navigation></memija-navigation>
    <router-outlet></router-outlet>
    <memija-common-footer></memija-common-footer>
  `
})
export class AppComponent { }
