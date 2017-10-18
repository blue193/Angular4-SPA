import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHelperService } from '../helpers/http-helper.service';
import { Observable } from 'rxjs/Observable';
import {environment} from '../../../environments/environment.prod';

@Injectable()
export class CountryService {

  constructor(
    private http: HttpClient,
    private _http: HttpHelperService
  ) { }

  getAllCountries() {
    return this.http.get('api/countries').map(x => x);
  }

  searchCountries(keyword) {
    const url = 'api/countries?alpha3_code=^' + keyword;
    return this.http.get(url).map(x => x);
  }

  searchCountriesEx(keyword) {
    const url = environment.baseUrl + 'country/search';
    const query = {text: keyword};
    return this._http.get(url, query).map(x => x.json());
  }

}
