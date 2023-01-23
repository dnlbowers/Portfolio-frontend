import { Component, Input, OnInit } from '@angular/core';
import { faCodeCommit, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { GithubProfile } from '../_models/github-profile';
import { GithubService } from '../_services/github.service';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {
  
  faUserSecret = faUserSecret;
  faCodeCommit = faCodeCommit;
  
  @Input() headerColor!: string;

  profile: GithubProfile | undefined = undefined;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.getProfile().subscribe(data => {
      this.profile = data;
    });
  };
}



