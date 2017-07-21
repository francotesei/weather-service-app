import {Component, OnDestroy, OnInit} from '@angular/core';
import {BoardService } from '../../services/board/board.service';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subject} from "rxjs/Subject";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers:[BoardService]
})

export class BoardComponent implements OnInit,OnDestroy {

  public origin:String = "board";
  public userId:String;
  public boards:any;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private boardService:BoardService) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.userId = params['userId'];
      this.boardService.getBoardsUser(this.userId)
        .then(boards=>this.boards = boards);
      this.boardService.getBoardsUserObs(this.userId)
       .takeUntil(this.ngUnsubscribe)
        .subscribe(boards=>this.boards = boards);
    });
  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  gotoDashboard(boardId:String){

    this.activatedRoute.params.subscribe((params: Params) => {
      let userId = params['userId'];
      this.router.navigate(["/dashboard/"+userId+"/"+boardId])
    });

  }
}
