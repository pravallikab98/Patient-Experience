import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangleBarchartComponent } from './triangle-barchart.component';

describe('BarchartComponent', () => {
  let component: TriangleBarchartComponent;
  let fixture: ComponentFixture<TriangleBarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriangleBarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriangleBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
