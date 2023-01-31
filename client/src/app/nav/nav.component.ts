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

  //Find way to make parent active when on showcase page and remove active when not on showcase page
  constructor() { }
  ngOnInit() {

  }


  // ngOnInit(){
  //   if(window.location.href.includes("showcase")){
  //     this.makeParentActive = true;
  //   } else {
  //     this.makeParentActive = false;
  //   }
  //   //terminate if the page is not the showcase page
  //   if(!this.makeParentActive) return;
  // }
}
