import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class HttpHelperService {

  constructor(
    private http: Http,
  ) { }

  /***
   * generate request options
   * @param isUrlEncoded
   * @param customHeader
   * @param customParam
   * @returns {RequestOptions}
   */
  private generateReqOptions(isUrlEncoded = false, customHeader?: Headers , customParam?: Object): RequestOptions {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    const search = new URLSearchParams();

    if (isUrlEncoded) {
      headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    }

    if (customHeader) {
      customHeader.forEach((value, key) => {
        headers.append(key, value[0]);
      });
    }

    if (customParam) {
      // tslint:disable-next-line:forin
      for (const key in customParam) {
        search.set(key, customParam[key]);
      }
    }

    return new RequestOptions({ headers, search });
  }

  /***
   * http get helper
   * @param url
   * @param query
   * @param requiredAuth
   * @param headers
   * @returns {Observable<Response>}
   */
  get(url: string, query: Object, headers?: Headers): Observable<any> {
    return this.http.get(url, this.generateReqOptions(false, headers, query));
  }

  /***
   * http exception handler
   * @param error
   * @returns {any}
   */
  private handleError (error: Response | any) {
    let errMsg: string;
    let errStatus: number;
    if (error instanceof Response) {
      const body = error.json() || '';

      errStatus = error.status;
      errMsg = body.msg;
    } else {
      errStatus = 500;
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw({status: errStatus, msg: errMsg});
  }
}
