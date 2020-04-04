import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutPieStatisticComponent } from './doughnut-pie-statistic.component';
import { DashboardModule } from '../dashboard.module';


describe('DoughnutPieStatisticComponent', () => {
  let component: DoughnutPieStatisticComponent;
  let fixture: ComponentFixture<DoughnutPieStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DashboardModule],
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
