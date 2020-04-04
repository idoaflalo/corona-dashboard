import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxEchartsModule } from 'ngx-echarts';

import { DoughnutPieStatisticComponent } from './doughnut-pie-statistic.component';

describe('DoughnutPieStatisticComponent', () => {
  let component: DoughnutPieStatisticComponent;
  let fixture: ComponentFixture<DoughnutPieStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DoughnutPieStatisticComponent],
      imports: [NgxEchartsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughnutPieStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
