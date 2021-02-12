import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartAxisComponent } from './bar-chartAxis.component';

describe('BarChartComponent', () => {
  let component: BarChartAxisComponent;
  let fixture: ComponentFixture<BarChartAxisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarChartAxisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartAxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
