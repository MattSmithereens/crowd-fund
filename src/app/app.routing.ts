import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component'
import { ProjectsDetailsComponent } from './projects-details/projects-details.component'

const appRoutes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  },
  {
    path: 'projects/:id',
    component: ProjectsDetailsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
