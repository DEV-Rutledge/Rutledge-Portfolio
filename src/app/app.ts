import { Component, signal } from '@angular/core';
import { Body } from './body/body';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [ Body, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('Rutledge_Site');
}
