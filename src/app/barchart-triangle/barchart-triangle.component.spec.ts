import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartTriangleComponent } from './barchart-triangle.component';

describe('BarchartComponent', () => {
  let component: BarchartTriangleComponent;
  let fixture: ComponentFixture<BarchartTriangleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarchartTriangleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartTriangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
