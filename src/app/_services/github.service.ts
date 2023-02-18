import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of, tap } from 'rxjs';
import { GitHubRepo } from '../_models/git-hub-repo';
import { GithubProfile } from '../_models/github-profile';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  baseUrl: string = environment.gitHunApiUrl;
  profile: GithubProfile | undefined;
  repos: GitHubRepo[] = [];

  constructor(private http: HttpClient) { }

  getProfile() {
    if(this.profile) return of(this.profile);
    return this.http.get<GithubProfile>(this.baseUrl)
        .pipe(
            tap(profile => this.profile = profile)
        );
  }

  getRepos() {
    if(this.repos.length > 0) return of(this.repos)
    return this.http.get<GitHubRepo[]>(this.baseUrl + "/repos").pipe(
      tap(repos => {
        this.repos = repos;
        return repos;
      })
    )
  }

//   getLanguagesUsed() {
//     this.repos.forEach(repos => {

//     })
//   }
}
