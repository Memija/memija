import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KnowledgeBaseComponent, ProfileComponent } from './components';

const routes: Routes = [
  {
    component: ProfileComponent,
    path: '',
  },
  {
    component: KnowledgeBaseComponent,
    path: 'knowledge-base',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
