import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-metric-card',
  templateUrl: './metric-card.html'
})
export class MetricCard {
  @Input() title: string = 'Lorem ipsum dolor sit ame...';
  @Input() description: string = 'Pellentesque non augue at nequ...';
  @Input() value: string = 'XX';
  @Input() showDeleteButton: boolean = false;
  @Output() delete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit();
  }
}