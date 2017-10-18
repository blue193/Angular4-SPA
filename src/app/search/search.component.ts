import { Component, OnInit } from '@angular/core';

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

  constructor(
    private countryService: CountryService
  ) { }

  ngOnInit() {
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
