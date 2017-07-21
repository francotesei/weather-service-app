import {Component, OnDestroy, OnInit} from '@angular/core';
import {BoardService} from "../../services/board/board.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Subject} from "rxjs/Subject";
import {Subscription} from "rxjs/Subscription";
declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[BoardService]
})
export class DashboardComponent implements OnInit,OnDestroy {


  public data:{
    lng,lat,
    forecasts: Array<any>
  };
  public lat:number;
  public lng:number;


  public lineChartData:any[] =[];
  public lineChartLabels = [];
  public isDataAvailable:boolean = false;
  private ngUnsubscribe: Subject<void> = new Subject<void>();




  constructor(private boardService:BoardService,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: Params) => {
      let boardId = params['boardId'];

      this.boardService.getBoard(boardId).then(data => this.loadData(data));
  this.boardService.getBoardObs(boardId)
        .takeUntil(this.ngUnsubscribe)
        .subscribe(data =>this.loadData(data));
    });
    $('#searchModal').on('shown.bs.modal', function() {
      console.log("modal is open")
    })

  }


  ngOnInit() {
  }
  ngOnDestroy() {

    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  loadData(data) {
    this.data = data;

    this.loadDataForCharts();
    this.isDataAvailable = true;
  }


  private loadDataForCharts() {
    var forecast =  this.data.forecasts;
    var high:Array<any> =[];
    var low:Array<any>=[];

    for(var i = 0 ;i< forecast.length;i++) {
      this.lineChartLabels.push(forecast[i].day);
      high.push(forecast[i].high);
      low.push(forecast[i].low);
    }
    this.lineChartData.push({data:high,label:'High'});
    this.lineChartData.push({data:low,label:'Low'});

    this.lat = parseFloat(this.data.lat);
    this.lng = parseFloat(this.data.lng);


  }


}
