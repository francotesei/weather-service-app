import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geo-panel',
  templateUrl: './geo-panel.component.html',
  styleUrls: ['./geo-panel.component.css'],
  inputs:['lat','lng']
})
export class GeoPanelComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
