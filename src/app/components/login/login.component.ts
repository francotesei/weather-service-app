import {Component, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import {LoginService} from '../../services/login/login.service';
import {CookieService} from 'angular2-cookie/core';
import {Observable} from 'rxjs/Rx';
import {Http} from "@angular/http";
declare var $: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
  hideLoginPanel:boolean = false;
  hideRegisterPanel:boolean = true;
  isError:boolean = false;
  errorMsg:String;

  @ViewChild('userLogin') userLogin:ElementRef;
  @ViewChild('passLogin') passLogin:ElementRef;
  @ViewChild('userRegister') userRegister:ElementRef;
  @ViewChild('passRegister') passRegister:ElementRef;
  @ViewChild('passRepeatRegister') passRepeatRegister:ElementRef;

  constructor(private router: Router,
              private service:LoginService,private cookies:CookieService) {

  }


  ngOnInit() {
  }

  showRegister(){
    this.hideLoginPanel = true;
    this.hideRegisterPanel = false;
    this.isError = false;
  }

  showLogin(){
    this.hideRegisterPanel = true;
    this.hideLoginPanel = false;
    this.isError = false;
  }

  actionLogin(){
    var userId = this.userLogin.nativeElement.value;
    var pass = this.passLogin.nativeElement.value;
    if(userId != "" && pass != "") {
      this.service.singIn(userId,pass)
        .then(token => this.next(token,userId))
        .catch(err=>this.showError(err))
    }
    }

    showError(err){
    this.isError = true;
    this.errorMsg = err;
  }

    actionRegister(){

      var userId = this.userRegister.nativeElement.value;
      var pass = this.passRegister.nativeElement.value;
      var rpass = this.passRepeatRegister.nativeElement.value;
      if(this.validateRegister(userId,pass,rpass)){
        this.service.singUp(userId,pass)
          .then(token =>this.next(token,userId))
          .catch(err=>this.showError(err))
      }else{
        this.errorMsg = "Los campos son incorrectos.";
        this.isError = true;
      }
  }

  next(token,userId){

    console.log(token.id);
    this.cookies.remove('TOKEN'+userId);
    this.cookies.put('TOKEN'+userId,token.id);
    this.router.navigate(["/boards/"+userId])
    }



  actionKeyInput(orig,keycode){
    this.isError = false;
    if(keycode == 13){
      if(orig == 'login'){
        this.actionLogin();
      }else {
        this.actionRegister();
      }
      }

  }

  private  validateRegister(user: any, pass: any, rpass: any) {
    if(user == "" && pass =="" )
      return false;
    if(pass != rpass)
      return false;
    return true;
  }


}
