import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-horizontal-bar-chart-skeleton',
    imports: [CommonModule],
    templateUrl: './horizontal-bar-chart-skeleton.html'
})
export class HorizontalBarChartSkeleton {
    rows = [1, 2, 3, 4, 5];
}

