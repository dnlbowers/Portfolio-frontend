import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { environment } from './../environments/environment';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  animations: [
    slideInAnimation
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Dev-Bowers - Fullstack Developer';
  
  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }



}
