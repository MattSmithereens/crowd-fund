import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsDetailsComponent } from './projects-details/projects-details.component';
import { ProjectsNewComponent } from './projects-new/projects-new.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectsDetailsComponent,
    ProjectsNewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
