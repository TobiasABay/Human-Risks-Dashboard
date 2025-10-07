import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedMetricCard } from './detailed-metric-card';

describe('DetailedMetricCard', () => {
  let component: DetailedMetricCard;
  let fixture: ComponentFixture<DetailedMetricCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedMetricCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedMetricCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
