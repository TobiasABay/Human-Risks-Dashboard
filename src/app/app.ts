import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeBanner } from './components/welcome-banner/welcome-banner';
import { MetricCard } from './metric-card/metric-card';
import { ProgressDisplayCard } from './progress-display-card/progress-display-card';
import { DetailedMetricCard } from './detailed-metric-card/detailed-metric-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WelcomeBanner, MetricCard, ProgressDisplayCard, DetailedMetricCard],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('human-risks-dashboard');

}
