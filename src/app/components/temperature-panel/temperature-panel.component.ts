import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature-panel',
  templateUrl: './temperature-panel.component.html',
  styleUrls: ['./temperature-panel.component.css'],
  inputs:['city','country','region','datetime','actTemp','highTemp','lowTemp','lineChartData','lineChartLabels' ,'status']
})
export class TemperaturePanelComponent   implements OnInit{
  public city:String;
  public country:String;
  public region:String;
  public  datetime:String;
  public actTemp:String;
  public highTemp:String;
  public lowTemp:String;
  public lineChartData;
  public lineChartLabels;
  public status:String;

  constructor() {

  }

  ngOnInit() {

  }

  getIconClass(status:String){
    switch (status){
      case "Sunny" || "Partly Cloudy": return "wi wi-day-sunny";
    }


  }

}
