import { Component, OnInit } from '@angular/core';
import { faCode, faLaptopCode, faBars } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isCollapsed = true;
  faCode = faCode;
  faLaptopCode = faLaptopCode
  faBars = faBars;
  makeParentActive = false;

  constructor() { }
  
  ngOnInit(){
    if(window.location.href.includes("showcase")){
      this.makeParentActive = true;
    } else {
      this.makeParentActive = false;
    }
   
  }
}
