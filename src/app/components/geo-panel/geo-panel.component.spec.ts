import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoPanelComponent } from './geo-panel.component';

describe('GeoPanelComponent', () => {
  let component: GeoPanelComponent;
  let fixture: ComponentFixture<GeoPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
