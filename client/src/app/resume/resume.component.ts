import { Component, Input, OnInit } from '@angular/core';
import { faGears, faTv } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  
  faTv = faTv
  faGears = faGears

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
      this.workColors = "bg-light text-black border border-dark border-5 border-top-0";
      this.skillsColors = "bg-dark text-light ";
    } else {
      this.workColors = "bg-black text-light";
      this.skillsColors = "bg-light text-black border border-dark border-5 border-top-0"
    }
  }

}
