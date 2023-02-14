import { Component, Input, OnInit } from '@angular/core';
import { faBriefcase, faBug, faGears, faTv } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  
  faTv = faTv;
  faGears = faGears;
  faBug = faBug;
  faBriefcase = faBriefcase;

  @Input() headerColor!: string;
  workColors: string | undefined;
  skillsColors: string | undefined;

  constructor() {}

  ngOnInit() {
    this.styleUpdate();
    window.onresize = () => this.styleUpdate();
  }

  styleUpdate() {
    if (window.innerWidth < 992) {
      this.workColors = "bg-light text-black border border-black border-5 border-top-0";
      this.skillsColors = "bg-black text-light";
    } else {
      this.workColors = "bg-black text-light";
      this.skillsColors = "bg-light text-black border border-black border-5 border-top-0"
    }
  }

}
