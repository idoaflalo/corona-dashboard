import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalizedBarChartComponent } from './hospitalized-bar-chart.component';

describe('HospitalizedBarChartComponent', () => {
  let component: HospitalizedBarChartComponent;
  let fixture: ComponentFixture<HospitalizedBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalizedBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalizedBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
