import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregateDashbaordComponent } from './aggregate-dashbaord.component';

describe('AggregateDashbaordComponent', () => {
  let component: AggregateDashbaordComponent;
  let fixture: ComponentFixture<AggregateDashbaordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggregateDashbaordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggregateDashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
