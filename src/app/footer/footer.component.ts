import { Component } from '@angular/core';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faDownload = faDownload
  faSquareGithub = faSquareGithub
  faLinkedin = faLinkedin

}
