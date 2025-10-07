import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressDisplayCard } from './progress-display-card';

describe('ProgressDisplayCard', () => {
  let component: ProgressDisplayCard;
  let fixture: ComponentFixture<ProgressDisplayCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressDisplayCard]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProgressDisplayCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
