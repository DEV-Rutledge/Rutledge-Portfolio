import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dev-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dev-projects.html',
  styleUrl: './dev-projects.scss',
})
export class DevProjects implements OnInit {

  repos: any[] = [];
  loading: boolean = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
  .get<any[]>('https://api.github.com/users/DEV-Rutledge/repos?sort=updated')
  .subscribe(data => {
    this.repos = data
      .filter(repo => !repo.fork)
      .slice(0, 3);
  });
  }
}
