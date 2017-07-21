import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastPanelComponent } from './forecast-panel.component';

describe('ForecastPanelComponent', () => {
  let component: ForecastPanelComponent;
  let fixture: ComponentFixture<ForecastPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
