import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-forecast-chart',
  templateUrl: './forecast-chart.component.html',
  styleUrls: ['./forecast-chart.component.css'],
  inputs:['chartData','chartLabels']
})
export class ForecastChartComponent implements OnInit {

  public chartData;
  public chartLabels;


  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;



  public barChartOptions =  {
    scaleShowVerticalLines: false,
    responsive: true,
  legend:{labels:{
    fontColor:'white'
  }},
  scales: {
    yAxes: [{
      ticks: {
        fontColor : 'white',
        color:'rgba(255, 255, 255, 255)',
        beginAtZero:true
      }
    }],
    xAxes: [{
      ticks: {
        fontColor : 'white',
        color:'rgba(255, 255, 255, 255)',
        beginAtZero:true
      }
    }]
  }
};



  constructor() {
  }
  ngOnInit() {
  }

}
