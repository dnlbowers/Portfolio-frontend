import { Component, Input, OnInit } from '@angular/core';
import { faCodeCommit, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { GitHubRepo } from '../_models/git-hub-repo';
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

  profile: GithubProfile | undefined;
  repos$: Observable<GitHubRepo[]> | undefined;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.getProfile().subscribe(profileData => {
      this.profile = profileData;
    });

    this.repos$ = this.githubService.getRepos();
  };
}



