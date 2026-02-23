import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private username = 'DEV-Rutledge';

  constructor(private http: HttpClient) {}

  getTopRepos() {
    return this.http
      .get<any[]>(`https://api.github.com/users/${this.username}/repos`)
      .pipe(
        map(repos =>
          repos
            .filter(repo => !repo.fork) // remove forked repos
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 3)
        )
      );
  }
}
