import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as pipes from './pipes/github';
import * as components from './components';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    components.FooterComponent,
    components.GistComponent,
    components.HeaderComponent,
    components.KnowledgeBaseComponent,
    components.NavigationComponent,
    components.ProfileComponent,
    components.ProjectsComponent,
    components.RepositoryComponent,
    components.ResumeDownloadComponent,
    pipes.GitHubGistDescriptionPipe,
    pipes.GitHubRepositoryNamePipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: []
})
export class AppModule { }
