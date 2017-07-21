import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {LoginService} from "../../services/login/login.service";
import {CookieService} from "angular2-cookie/core";
import {BoardService} from "../../services/board/board.service";
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[LoginService],
  inputs:['location']
})
export class NavbarComponent implements OnInit {

  public location:String;
  public userId:String;
  public boards:Array<any> = [];

  @ViewChild('inputSearch') inputSearch:ElementRef;
  constructor(private router:Router,
              private loginService:LoginService,
              private boardService:BoardService,
              private activatedRoute:ActivatedRoute,
              private cookiesService:CookieService) {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.userId = params['userId'];
      let tokenId = this.cookiesService.get('TOKEN'+this.userId);
      this.loginService.validateUser(this.userId,tokenId)
        .then(token => this.validateToken()).catch(err=>this.router.navigate(["/login"]))
    });


  }

  ngOnInit() {}

  actionAddFavorite(){
    this.activatedRoute.params.subscribe((params: Params) => {
      let boardId = params['boardId'];
      this.boardService.addFavorite(this.userId,boardId)
        .then()
        .catch()
    });
  }

  actionRemoveFavorite(){
    this.activatedRoute.params.subscribe((params: Params) => {
      let boardId = params['boardId'];
      this.boardService.removeFavorite(this.userId,boardId)
        .then()
        .catch()
    });
  }

  actionShowFavorite(){
    this.router.navigate(["/boards/"+this.userId]);
  }

  actionLogout(){
    this.loginService.logout(this.userId)
      .then(v=>this.router.navigate(["/login"]))

  }

  searchLocation(){
    let value = this.inputSearch.nativeElement.value;
    if(value == null || value == "")
      return;

    this.boardService.getByName(value)
      .then(boards =>this.boards = boards)
      .catch()

  }
  actionInput(KeyCode){
   if(KeyCode == 13)
     this.searchLocation();
  }

  gotoDashboard(boardId:String){
    this.closeModal();
    this.router.navigate(["/dashboard/"+this.userId+"/"+boardId]);
  }

  validateToken(){

  }



  closeModal(){
    $('#searchModal').modal('hide');
  }


}
