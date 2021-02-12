import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CylinderbarsComponent } from './cylinderbars.component';

describe('LinechartComponent', () => {
  let component: CylinderbarsComponent;
  let fixture: ComponentFixture<CylinderbarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CylinderbarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CylinderbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
