import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../_models/project';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{

  projects$: Observable<Project[]> | undefined;

  constructor(private projectsService: ProjectsService) { }
  
  ngOnInit():void {
    this.projects$ = this.projectsService.getProjects();
    console.log(this.projects$);
    this.projects$.forEach(project => {
      console.log(project);
    });
  }
}
