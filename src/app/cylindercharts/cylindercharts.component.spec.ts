import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CylinderchartsComponent } from './cylindercharts.component';

describe('LinechartComponent', () => {
  let component: CylinderchartsComponent;
  let fixture: ComponentFixture<CylinderchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CylinderchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CylinderchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
