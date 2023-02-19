import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, of, tap } from 'rxjs';
import { Project } from '../_models/project';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  baseUrl:string = environment.projectsApiUrl;
  projects: Project[] = [];
  imageUrl:string = environment.cloudinaryImageUrl;

  constructor(private http: HttpClient) { }

  getProjects() {
    if(this.projects.length>0) return of(this.projects);
    return this.http.get<Project[]>(this.baseUrl + "projects").pipe(
      tap(projects => {
        this.projects = projects;
        // this.createFullImageUrl();
      }),
      map(projects => {
        return projects;
      })
    );
  }
  

  createFullImageUrl() {
    this.projects.forEach(project => {
      project.screenshot = this.imageUrl.concat(project.screenshot);
    })
  }
}
