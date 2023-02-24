import { Component } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.css']
})
export class CurriculumVitaeComponent {
  faDownload = faDownload
  active = 1;
  headerColor: string = "bg-black";

}
