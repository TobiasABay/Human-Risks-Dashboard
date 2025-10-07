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

  // Data signals
  protected metricCardData = signal<MetricCardData | null>(null);
  protected progressCardData = signal<ProgressCardData | null>(null);
  protected detailedMetricCardData = signal<DetailedMetricCardData | null>(null);

  ngOnInit() {
    this.loadDashboardData();
  }

  /**
   * Load all dashboard data from mock endpoints
   * This simulates API calls with delays to show skeleton loading states
   */
  loadDashboardData() {
    this.isLoading.set(true);

    // Fetch all data in parallel
    forkJoin({
      metricCard: this.mockDataService.getMetricCardData(),
      progressCard: this.mockDataService.getProgressCardData(),
      detailedMetricCard: this.mockDataService.getDetailedMetricCardData()
    }).subscribe({
      next: (data) => {
        this.metricCardData.set(data.metricCard);
        this.progressCardData.set(data.progressCard);
        this.detailedMetricCardData.set(data.detailedMetricCard);
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error('Error loading dashboard data:', error);
        this.isLoading.set(false);
      }
    });
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
}
