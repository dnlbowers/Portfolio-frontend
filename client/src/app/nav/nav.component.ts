import { Component } from '@angular/core';
import { faCode, faLaptopCode, faBars } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isCollapsed = true;
  faCode = faCode;
  faLaptopCode = faLaptopCode
  faBars = faBars;

}
