import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, tap } from 'rxjs';
import { GithubProfile } from '../_models/github-profile';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  baseUrl: string = "https://api.github.com/users/dnlbowers";
  profile: GithubProfile | undefined

  constructor(private http: HttpClient) { }

  getProfile() {
    if(this.profile) return of(this.profile);
    return this.http.get<GithubProfile>(this.baseUrl)
        .pipe(
            tap(profile => this.profile = profile)
        );
    }
}
