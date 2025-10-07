# Skeleton Loading Components

This directory contains skeleton loading components for all cards and charts in the dashboard. Skeleton screens provide a better user experience by showing placeholder content while data is being loaded.

## Available Skeleton Components

### Cards
- `MetricCardSkeleton` - Loading placeholder for MetricCard
- `ProgressDisplayCardSkeleton` - Loading placeholder for ProgressDisplayCard
- `DetailedMetricCardSkeleton` - Loading placeholder for DetailedMetricCard

### Charts
- `HorizontalBarChartSkeleton` - Loading placeholder for HorizontalBarChart
- `RadarChartSkeleton` - Loading placeholder for RadarChart

## Usage

### Basic Usage

Import the skeleton component and use it conditionally based on your loading state:

```typescript
import { MetricCardSkeleton } from './components/skeletons/metric-card-skeleton/metric-card-skeleton';
import { MetricCard } from './components/cards/metric-card/metric-card';

@Component({
  selector: 'app-dashboard',
  imports: [MetricCard, MetricCardSkeleton],
  template: `
    @if (isLoading()) {
      <app-metric-card-skeleton></app-metric-card-skeleton>
    } @else {
      <app-metric-card [title]="title" [value]="value"></app-metric-card>
    }
  `
})
export class Dashboard {
  isLoading = signal(true);
}
```

### With Multiple Components

```typescript
@if (isLoading()) {
  <app-metric-card-skeleton></app-metric-card-skeleton>
  <app-progress-display-card-skeleton></app-progress-display-card-skeleton>
  <app-detailed-metric-card-skeleton></app-detailed-metric-card-skeleton>
} @else {
  <app-metric-card [title]="data.title" [value]="data.value"></app-metric-card>
  <app-progress-display-card [title]="data.title" [value]="data.progress"></app-progress-display-card>
  <app-detailed-metric-card [title]="data.title" [value]="data.metric"></app-detailed-metric-card>
}
```

## Features

- **Animated**: All skeletons use Tailwind's `animate-pulse` for a smooth loading effect
- **Matching Layout**: Each skeleton matches the exact layout and dimensions of its corresponding component
- **Responsive**: Skeletons maintain the same responsive behavior as the actual components
- **No Props Required**: Skeletons don't require any input properties

## Styling

All skeleton components use Tailwind CSS classes for styling:
- `animate-pulse` - Creates the loading animation
- `bg-gray-200`, `bg-gray-300` - Different shades for depth
- Layout classes match the actual components for seamless transitions

## Demo

See `app.html` for a working example with a toggle button to switch between loading and loaded states.

