import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../_models/project';

@Component({
  selector: 'app-project-carousel',
  templateUrl: './project-carousel.component.html',
  styleUrls: ['./project-carousel.component.css'],
})
export class ProjectCarouselComponent {
  @Input() projects: Observable<Project[]> | undefined;
}


