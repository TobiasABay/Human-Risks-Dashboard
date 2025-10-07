import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ChartDataItem {
  label: string;
  segment1Width: string;
  segment2Width: string;
  segment3Width: string;
}

@Component({
  selector: 'app-horizontal-bar-chart',
  imports: [CommonModule],
  templateUrl: './horizontal-bar-chart.html'
})
export class HorizontalBarChart {
  @Input() title: string = 'Risk Assessment by Department';
  @Input() description: string = 'Overview of risk levels across different departments and teams';

  chartData: ChartDataItem[] = [
    { label: 'Engineering', segment1Width: '45%', segment2Width: '30%', segment3Width: '15%' },
    { label: 'Sales', segment1Width: '35%', segment2Width: '25%', segment3Width: '20%' },
    { label: 'Marketing', segment1Width: '50%', segment2Width: '20%', segment3Width: '10%' },
    { label: 'HR', segment1Width: '40%', segment2Width: '35%', segment3Width: '5%' },
    { label: 'Finance', segment1Width: '55%', segment2Width: '15%', segment3Width: '10%' }
  ];
}