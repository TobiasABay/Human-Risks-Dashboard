import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeBanner } from './components/welcome-banner/welcome-banner';
import { MetricCard } from './components/cards/metric-card/metric-card';
import { ProgressDisplayCard } from './components/cards/progress-display-card/progress-display-card';
import { DetailedMetricCard } from './components/cards/detailed-metric-card/detailed-metric-card';
import { HorizontalBarChart } from './components/charts/horizontal-bar-chart/horizontal-bar-chart';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WelcomeBanner, MetricCard, ProgressDisplayCard, DetailedMetricCard, HorizontalBarChart],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('human-risks-dashboard');

}
