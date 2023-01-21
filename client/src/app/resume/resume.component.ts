import { Component, Input } from '@angular/core';
import { faGears, faTv } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  
  faTv = faTv
  faGears = faGears

  @Input() headerColor!: string;

}
