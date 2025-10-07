import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detailed-metric-card',
  imports: [],
  templateUrl: './detailed-metric-card.html',
})
export class DetailedMetricCard {
  @Input() title: string = 'Lorem ipsum dolor sit ame...';
  @Input() description: string = 'Pellentesque non augue at nequ...';
  @Input() value: string = 'XX';
  @Input() progress: string = '75%';
  @Input() showDeleteButton: boolean = false;
  @Output() delete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit();
  }
}
