import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeBanner } from './components/welcome-banner/welcome-banner';
import { MetricCard } from './components/cards/metric-card/metric-card';
import { ProgressDisplayCard } from './components/cards/progress-display-card/progress-display-card';
import { DetailedMetricCard } from './components/cards/detailed-metric-card/detailed-metric-card';
import { HorizontalBarChart } from './components/charts/horizontal-bar-chart/horizontal-bar-chart';
import { RadarChart } from './components/charts/radar-chart/radar-chart';

// Skeleton Components
import { MetricCardSkeleton } from './components/skeletons/metric-card-skeleton/metric-card-skeleton';
import { ProgressDisplayCardSkeleton } from './components/skeletons/progress-display-card-skeleton/progress-display-card-skeleton';
import { DetailedMetricCardSkeleton } from './components/skeletons/detailed-metric-card-skeleton/detailed-metric-card-skeleton';
import { HorizontalBarChartSkeleton } from './components/skeletons/horizontal-bar-chart-skeleton/horizontal-bar-chart-skeleton';
import { RadarChartSkeleton } from './components/skeletons/radar-chart-skeleton/radar-chart-skeleton';

// Services
import { MockDataService, MetricCardData, ProgressCardData, DetailedMetricCardData } from './services/mock-data.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    WelcomeBanner,
    MetricCard,
    ProgressDisplayCard,
    DetailedMetricCard,
    HorizontalBarChart,
    RadarChart,
    MetricCardSkeleton,
    ProgressDisplayCardSkeleton,
    DetailedMetricCardSkeleton,
    HorizontalBarChartSkeleton,
    RadarChartSkeleton
  ],
  templateUrl: './app.html'
})
export class App implements OnInit {
  private mockDataService = inject(MockDataService);

  protected readonly title = signal('human-risks-dashboard');
  protected readonly isLoading = signal(true);

  // Component arrays - each item represents one instance of the component
  protected metricCards = signal<MetricCardData[]>([
    { title: 'Total Risk Events', description: 'Last 30 days', value: '42' }
  ]);

  protected progressCards = signal<ProgressCardData[]>([
    { title: 'Compliance Rate', description: 'Current quarter progress', value: '87%' }
  ]);

  protected detailedMetricCards = signal<DetailedMetricCardData[]>([
    { title: 'Security Score', description: 'Overall system health', value: '92', progress: '92%' }
  ]);

  protected horizontalCharts = signal<number[]>([1]); // Just track count
  protected radarCharts = signal<number[]>([1]); // Just track count

  ngOnInit() {
    this.loadDashboardData();
  }

  /**
   * Load all dashboard data from mock endpoints
   * This simulates API calls with delays to show skeleton loading states
   */
  loadDashboardData() {
    this.isLoading.set(true);

    // Simulate loading - in real app, this would fetch from API
    setTimeout(() => {
      // Data is already set in the signals, just end loading state
      this.isLoading.set(false);
    }, 2000);
  }

  /**
   * Manually toggle loading state for demonstration
   */
  toggleLoading() {
    if (this.isLoading()) {
      // If currently loading, force show data
      this.isLoading.set(false);
    } else {
      // Reload data to show skeletons again
      this.loadDashboardData();
    }
  }

  /**
   * Add a new instance of a component
   */
  addComponent(type: 'metric' | 'progress' | 'detailed' | 'horizontal' | 'radar') {
    switch (type) {
      case 'metric':
        const newMetric: MetricCardData = {
          title: `Metric ${this.metricCards().length + 1}`,
          description: 'Custom metric description',
          value: `${Math.floor(Math.random() * 100)}`
        };
        this.metricCards.update(cards => [...cards, newMetric]);
        break;

      case 'progress':
        const newProgress: ProgressCardData = {
          title: `Progress ${this.progressCards().length + 1}`,
          description: 'Custom progress description',
          value: `${Math.floor(Math.random() * 100)}%`
        };
        this.progressCards.update(cards => [...cards, newProgress]);
        break;

      case 'detailed':
        const value = Math.floor(Math.random() * 100);
        const newDetailed: DetailedMetricCardData = {
          title: `Detailed ${this.detailedMetricCards().length + 1}`,
          description: 'Custom detailed description',
          value: `${value}`,
          progress: `${value}%`
        };
        this.detailedMetricCards.update(cards => [...cards, newDetailed]);
        break;

      case 'horizontal':
        this.horizontalCharts.update(charts => [...charts, charts.length + 1]);
        break;

      case 'radar':
        this.radarCharts.update(charts => [...charts, charts.length + 1]);
        break;
    }
  }

  /**
   * Remove an instance of a component
   */
  removeComponent(type: 'metric' | 'progress' | 'detailed' | 'horizontal' | 'radar', index: number) {
    switch (type) {
      case 'metric':
        this.metricCards.update(cards => cards.filter((_, i) => i !== index));
        break;
      case 'progress':
        this.progressCards.update(cards => cards.filter((_, i) => i !== index));
        break;
      case 'detailed':
        this.detailedMetricCards.update(cards => cards.filter((_, i) => i !== index));
        break;
      case 'horizontal':
        this.horizontalCharts.update(charts => charts.filter((_, i) => i !== index));
        break;
      case 'radar':
        this.radarCharts.update(charts => charts.filter((_, i) => i !== index));
        break;
    }
  }

  /**
   * Clear all instances of a component type
   */
  clearComponent(type: 'metric' | 'progress' | 'detailed' | 'horizontal' | 'radar') {
    switch (type) {
      case 'metric':
        this.metricCards.set([]);
        break;
      case 'progress':
        this.progressCards.set([]);
        break;
      case 'detailed':
        this.detailedMetricCards.set([]);
        break;
      case 'horizontal':
        this.horizontalCharts.set([]);
        break;
      case 'radar':
        this.radarCharts.set([]);
        break;
    }
  }

  /**
   * Reset to default layout (one of each)
   */
  resetToDefault() {
    this.metricCards.set([
      { title: 'Total Risk Events', description: 'Last 30 days', value: '42' }
    ]);
    this.progressCards.set([
      { title: 'Compliance Rate', description: 'Current quarter progress', value: '87%' }
    ]);
    this.detailedMetricCards.set([
      { title: 'Security Score', description: 'Overall system health', value: '92', progress: '92%' }
    ]);
    this.horizontalCharts.set([1]);
    this.radarCharts.set([1]);
  }
}
