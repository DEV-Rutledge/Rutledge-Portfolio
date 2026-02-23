import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';
import { Resume } from '../components/resume/resume';
import { CollegeInfo } from '../components/college-info/college-info';
import { DevProjects } from '../components/dev-projects/dev-projects';
import { Highlights } from '../components/highlights/highlights';
import { GithubService } from '../services/github.services';

@Component({
  selector: 'app-body',
  imports: [Resume, CollegeInfo, DevProjects, Highlights],
  templateUrl: './body.html',
  styleUrls: ['./body.scss'],
})
export class Body {

  repos: any[] = [];
  loading = true;

  constructor(private githubService: GithubService) {
    this.loadRepos();
  }
  loadRepos() {
    this.githubService.getTopRepos().subscribe({
      next: (repos) => {
        this.repos = repos;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching repos:', err);
        this.loading = false;
      }
    });
  }

  @ViewChild('spotlight', { static: true }) spotlight!: ElementRef;

  @HostListener('window:mousemove', ['$event'])
onMouseMove(event: MouseEvent) {
  this.spotlight.nativeElement.style.setProperty('--x', `${event.clientX}px`);
  this.spotlight.nativeElement.style.setProperty('--y', `${event.clientY}px`);
}


}
