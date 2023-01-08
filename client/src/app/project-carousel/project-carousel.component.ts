import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../_models/project';

@Component({
  selector: 'app-project-carousel',
  templateUrl: './project-carousel.component.html',
  styleUrls: ['./project-carousel.component.css']
})
export class ProjectCarouselComponent implements OnInit {
  @Input() Projects$: Project | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
