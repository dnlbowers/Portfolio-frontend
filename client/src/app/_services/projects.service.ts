import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, of, tap } from 'rxjs';
import { Project } from '../_models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  baseUrl:string = "http://localhost:8000/api/";
  projects: Project[] = [];
  imageUrl:string = "https://res.cloudinary.com/df4m8hva5/";

  constructor(private http: HttpClient) { }

  getProjects() {
    if(this.projects.length>0) return of(this.projects);
    return this.http.get<Project[]>(this.baseUrl + "projects").pipe(
      tap(projects => {
        this.projects = projects;
        this.createFullImageUrl();
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
