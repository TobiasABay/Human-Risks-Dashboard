import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeBanner } from './components/welcome-banner/welcome-banner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WelcomeBanner],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('human-risks-dashboard');

}
