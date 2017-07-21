import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css'],
  inputs: ['board']
})
export class WeatherWidgetComponent implements OnInit {

  public board:any;

  constructor() { }

  ngOnInit() {
  }

}
