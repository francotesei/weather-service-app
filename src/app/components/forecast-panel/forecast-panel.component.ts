import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast-panel',
  templateUrl: './forecast-panel.component.html',
  styleUrls: ['./forecast-panel.component.css'],
  inputs:['forecast']
})
export class ForecastPanelComponent implements OnInit {
  public forecast;

  constructor() {
  }

  ngOnInit() {
  }

}
