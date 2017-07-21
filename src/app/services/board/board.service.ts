import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {BaseServiceService} from "../base-service/base-service.service";
import {Observable} from 'rxjs/Rx';
import {environment} from "../../../environments/environment";

@Injectable()
export class BoardService extends BaseServiceService {
  private URL = environment.url+'/boards';

  constructor(private http: Http) {
    super();
  }

  getBoard(boardId: String): Promise<any> {

    return this.http.get(this.URL + "/" + boardId)
      .toPromise()
      .then(this.resolveData)
      .catch(this.handleError);
  }

  getByName(boardName: String): Promise<any> {

    return this.http.get(this.URL + "/byName?name=" + boardName)
      .toPromise()
      .then(this.resolveData)
      .catch(this.handleError);
  }

  addFavorite(userId: String, boardId: String): Promise<any> {
    return this.http.get(this.URL + "/addBoardToFavorite/?username=" + userId + "&board=" + boardId)
      .toPromise()
      .then(this.resolveData)
      .catch(this.handleError);
  }

  removeFavorite(userId: String, boardId: String): Promise<any> {
    return this.http.get(this.URL + "/removeBoardToFavorite/?username=" + userId + "&board=" + boardId)
      .toPromise()
      .then(this.resolveData)
      .catch(this.handleError);
  }

  getBoardsUser(userId: String): Promise<any> {
    return this.http.get(this.URL + "/boardsUser/?username=" + userId)
      .toPromise()
      .then(this.resolveData)
      .catch(this.handleError)
  }

  getBoardObs(boardId: String): Observable<any> {
    return Observable.interval(environment.pollingInterval)
      .switchMap(() => this.http.get(this.URL + "/" + boardId))
      .map(this.resolveData)
      .catch(this.handleError);
  }

  getBoardsUserObs(userId: String): Observable<any> {
    return Observable.interval(environment.pollingInterval)
      .switchMap(() => this.http.get(this.URL + "/boardsUser/?username=" + userId))
      .map(this.resolveData)
      .catch(this.handleError);
  }

}
