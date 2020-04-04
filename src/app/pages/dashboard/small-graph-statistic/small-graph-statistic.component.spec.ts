import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallGraphStatisticComponent } from './small-graph-statistic.component';

describe('SmallGraphStatisticComponent', () => {
  let component: SmallGraphStatisticComponent;
  let fixture: ComponentFixture<SmallGraphStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SmallGraphStatisticComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallGraphStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
