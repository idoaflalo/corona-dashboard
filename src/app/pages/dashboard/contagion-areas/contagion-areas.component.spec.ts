import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContagionAreasComponent } from './contagion-areas.component';

describe('ContagionAreasComponent', () => {
  let component: ContagionAreasComponent;
  let fixture: ComponentFixture<ContagionAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContagionAreasComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContagionAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
