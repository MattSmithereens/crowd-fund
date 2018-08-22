import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../models/project.model'
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ProjectService } from '../project.service'

@Component({
  selector: 'app-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.css'],
  providers: [ProjectService]
})
export class ProjectsDetailsComponent implements OnInit {
  projectId: string;
  projectToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.forEach((urlParamaters) => {
      this.projectId = urlParamaters['id'];
    });
    this.projectService.getProjectById(this.projectId).subscribe(lastDataEvent => {
      this.projectToDisplay = lastDataEvent;
    })
    //this.projectToDisplay = this.projectService.getProjectById(this.projectId);
  }

}
