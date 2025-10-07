import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radar-chart',
  imports: [],
  templateUrl: './radar-chart.html',
})
export class RadarChart {
  @Input() showDeleteButton: boolean = false;
  @Output() delete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit();
  }
}
