import { Component } from '@angular/core';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faFileArrowDown = faFileArrowDown
  faSquareGithub = faSquareGithub
  faLinkedin = faLinkedin

}
