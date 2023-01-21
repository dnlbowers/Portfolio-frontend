import { Component, Input } from '@angular/core';
import { faBookOpen, faChildReaching, faHandFist, faYinYang } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent {
  
  faBookOpen = faBookOpen;
  faYinYang = faYinYang;
  faChildReaching = faChildReaching;
  faHandFist = faHandFist;
  
  @Input() headerColor!: string;
}
