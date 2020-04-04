import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallStatisticsInfoComponent } from './small-statistics-info.component';

describe('SmallStatisticsInfoComponent', () => {
  let component: SmallStatisticsInfoComponent;
  let fixture: ComponentFixture<SmallStatisticsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SmallStatisticsInfoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallStatisticsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
