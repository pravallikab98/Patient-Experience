import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRatingDashboardComponent } from './star-rating-dashboard.component';

describe('StarRatingDashboardComponent', () => {
  let component: StarRatingDashboardComponent;
  let fixture: ComponentFixture<StarRatingDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarRatingDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarRatingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
