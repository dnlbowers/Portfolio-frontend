import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, of } from 'rxjs';
import { Project } from '../_models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  baseUrl:string = "http://localhost:8000/api/";
  projects: Project[] = [];

  constructor(private http: HttpClient) { }

  getProjects() {
    if(this.projects.length>0) return of(this.projects);
    return this.http.get<Project[]>(this.baseUrl + "projects").pipe(
      map(projects => {
        this.projects = projects;
        return projects;
      })
    );
  }
}