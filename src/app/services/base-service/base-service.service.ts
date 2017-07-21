import {Injectable, ViewContainerRef} from '@angular/core';
import { Http,Response } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {ApiResponse} from "../../api-response";





@Injectable()
export class BaseServiceService {


  constructor() {
  }



  public resolveData(res: Response) {
    let _res: ApiResponse = res.json();

    console.log(_res);
    if (_res.status == "ERROR")return  Promise.reject(_res.result);

    if(_res.result instanceof Object) {
      return _res.result
    } else return JSON.parse(_res.result);
  }
  public handleError(error:Response|any){

    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }


}
