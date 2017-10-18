import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CountryService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCountries() {
    return this.http.get('api/countries').map(x => x);
  }

  searchCountries(keyword) {
    const url = 'api/countries?alpha3_code=^' + keyword;
    return this.http.get(url).map(x => x);
  }

}
