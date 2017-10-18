import { Component, OnInit } from '@angular/core';

import { isoGeo } from '../core/geocode/geo';
import { Country } from '../core/models/country.model';
import { CountryService } from '../core/services/country.service';

@Component({
  selector: 'crch-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  keyword = '';
  timer: any = [];
  countries: Country[] = [];

  selectedCountry: Country = new Country();
  mapRender = true;

  isoGeo = [];

  constructor(
    private countryService: CountryService
  ) { }

  ngOnInit() {
    isoGeo.map(x => {
      const y = {
        two: x[9],
        lat: x[12],
        lng: x[13]
      };
      this.isoGeo.push(y);
    });

    console.log(this.isoGeo);
  }

  onInputKeyword(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
    const instance = this;
    this.timer = setInterval(
      function(){
        instance.searchCountry();
        clearInterval(instance.timer);
      }, 500);
  }

  onClickCountry(country: Country): void {
    this.selectedCountry = country;
    const geo = this.isoGeo.find(x => x.two === country.alpha2_code);
    if (geo) {
      this.selectedCountry.lat = +geo.lat;
      this.selectedCountry.lng = +geo.lng;
      this.mapRender = false;
      setTimeout(() => this.mapRender = true, 1);
    }
    console.log(geo);
  }

  private searchCountry(): void {
    if (!this.keyword) {
      return;
    }
    this.countryService.searchCountries(this.keyword).subscribe((res: Country[]) => {
      this.countries = res;
    });
  }

}
