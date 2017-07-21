import {Injectable, ViewContainerRef} from '@angular/core';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Http} from "@angular/http";
import {BaseServiceService} from "../base-service/base-service.service";
import {Observable} from 'rxjs/Rx';
import {environment} from "../../../environments/environment";

@Injectable()
export class LoginService extends BaseServiceService{
  private URL = environment.url+'/login';

  constructor(private http: Http) {
    super();

  };

  singIn(username: String, pass: String): Promise<any> {
    return this.http.get(this.URL + "/singIn?username=" + username + "&pass=" + pass)
      .toPromise()
      .then(this.resolveData)
      .catch(this.handleError);
  }

  singUp (username: String ,pass:String): Promise<any> {

    return this.http.get(this.URL+"/singUp?username="+username+"&pass="+pass)
      .toPromise()
      .then(this.resolveData)
      .catch(this.handleError);
  }


  logout (username: String): Promise<any> {

    return this.http.get(this.URL+"/logout?username="+username)
      .toPromise()
      .then(this.resolveData)
      .catch(this.handleError);
  }


  validateUser (username: String,tokenId:String): Promise<any> {

    return this.http.get(this.URL+"/validateSession?username="+username+"&token="+tokenId)
      .toPromise()
      .then(this.resolveData)
      .catch(this.handleError);
  }
}
