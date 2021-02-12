import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingbarchartComponent } from './floatingbarchart.component';

describe('BubblechartComponent', () => {
  let component: FloatingbarchartComponent;
  let fixture: ComponentFixture<FloatingbarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingbarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingbarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
