# Mock Data Service

This service provides mock API endpoints with simulated delays to demonstrate loading states and skeleton screens.

## Overview

The `MockDataService` simulates real API calls by returning data wrapped in RxJS Observables with delays. This allows you to see how the application behaves during data loading without needing a real backend.

## Available Endpoints

### `getMetricCardData()`
- **Delay**: 1.5 seconds
- **Returns**: `Observable<MetricCardData>`
- **Use Case**: Fetches metric card data

```typescript
this.mockDataService.getMetricCardData().subscribe(data => {
  console.log(data);
  // { title: 'Total Risk Events', description: 'Last 30 days', value: '42' }
});
```

### `getProgressCardData()`
- **Delay**: 2 seconds
- **Returns**: `Observable<ProgressCardData>`
- **Use Case**: Fetches progress card data

```typescript
this.mockDataService.getProgressCardData().subscribe(data => {
  console.log(data);
  // { title: 'Compliance Rate', description: 'Current quarter progress', value: '87%' }
});
```

### `getDetailedMetricCardData()`
- **Delay**: 1.8 seconds
- **Returns**: `Observable<DetailedMetricCardData>`
- **Use Case**: Fetches detailed metric card data

```typescript
this.mockDataService.getDetailedMetricCardData().subscribe(data => {
  console.log(data);
  // { title: 'Security Score', description: 'Overall system health', value: '92', progress: '92%' }
});
```

### `getHorizontalBarChartData()`
- **Delay**: 2.5 seconds
- **Returns**: `Observable<ChartDataItem[]>`
- **Use Case**: Fetches horizontal bar chart data

### `getRadarChartData()`
- **Delay**: 3 seconds
- **Returns**: `Observable<any>`
- **Use Case**: Fetches radar chart data

### `getAllDashboardData()`
- **Delay**: 2 seconds
- **Returns**: `Observable<DashboardData>`
- **Use Case**: Fetches all dashboard data at once

```typescript
this.mockDataService.getAllDashboardData().subscribe(data => {
  console.log(data.metricCard);
  console.log(data.progressCard);
  console.log(data.detailedMetricCard);
  console.log(data.chartData);
});
```

## Usage Example

### Basic Usage

```typescript
import { MockDataService } from './services/mock-data.service';

export class MyComponent {
  private mockDataService = inject(MockDataService);
  protected isLoading = signal(true);
  protected data = signal<MetricCardData | null>(null);

  loadData() {
    this.isLoading.set(true);
    
    this.mockDataService.getMetricCardData().subscribe({
      next: (data) => {
        this.data.set(data);
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error('Error:', error);
        this.isLoading.set(false);
      }
    });
  }
}
```

### Parallel Loading with forkJoin

Load multiple endpoints in parallel:

```typescript
import { forkJoin } from 'rxjs';

loadAllData() {
  this.isLoading.set(true);

  forkJoin({
    metricCard: this.mockDataService.getMetricCardData(),
    progressCard: this.mockDataService.getProgressCardData(),
    detailedCard: this.mockDataService.getDetailedMetricCardData()
  }).subscribe({
    next: (data) => {
      this.metricCardData.set(data.metricCard);
      this.progressCardData.set(data.progressCard);
      this.detailedCardData.set(data.detailedCard);
      this.isLoading.set(false);
    },
    error: (error) => {
      console.error('Error loading data:', error);
      this.isLoading.set(false);
    }
  });
}
```

### Sequential Loading

Load endpoints one after another:

```typescript
import { switchMap } from 'rxjs/operators';

loadSequentially() {
  this.isLoading.set(true);

  this.mockDataService.getMetricCardData().pipe(
    switchMap(metricData => {
      this.metricCardData.set(metricData);
      return this.mockDataService.getProgressCardData();
    }),
    switchMap(progressData => {
      this.progressCardData.set(progressData);
      return this.mockDataService.getDetailedMetricCardData();
    })
  ).subscribe({
    next: (detailedData) => {
      this.detailedCardData.set(detailedData);
      this.isLoading.set(false);
    },
    error: (error) => {
      console.error('Error:', error);
      this.isLoading.set(false);
    }
  });
}
```

## Customizing Delays

To change the delay for a specific endpoint, modify the `delay()` value:

```typescript
getMetricCardData(): Observable<MetricCardData> {
  const data: MetricCardData = { /* ... */ };
  return of(data).pipe(delay(3000)); // Changed to 3 seconds
}
```

## TypeScript Interfaces

All data types are exported from the service:

```typescript
import { 
  MetricCardData, 
  ProgressCardData, 
  DetailedMetricCardData,
  ChartDataItem,
  DashboardData 
} from './services/mock-data.service';
```

## Replacing with Real API

When you're ready to connect to a real backend, simply:

1. Create a new service (e.g., `ApiService`)
2. Replace `MockDataService` calls with real HTTP calls
3. Keep the same interfaces and return types
4. The rest of your application code stays the same!

```typescript
// Real API service
@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);

  getMetricCardData(): Observable<MetricCardData> {
    return this.http.get<MetricCardData>('/api/metrics/card');
  }
}
```

