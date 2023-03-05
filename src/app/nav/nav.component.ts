import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faCode, faLaptopCode, faBars } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav',
  animations: [
    trigger('mobileMenuAnimation', [
      state('open', style({
        // open nav menu fully
        transform: 'translateX(0)',
        height: '*',
      })),
      state('closed', style({
        // close nav menu fully
        height: '0',
        overflow: 'hidden',
        transform: 'translateX(-100%)'
      })),
      transition('open => closed', animate('0.3s ease-in')),
      transition('closed => open', animate('0.5s ease-out'))
    ])
  ],
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

  activeParentFalse() {
    this.makeParentActive = false;
  }
  activeParentTrue() {
    this.makeParentActive = true;
  }

  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }
  
}
