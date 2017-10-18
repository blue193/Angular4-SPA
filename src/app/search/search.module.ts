import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { MaterialModule } from '../shared/material/material.module';
import { SearchComponent } from './search.component';

import { CountryService } from '../core/services/country.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    AgmCoreModule
  ],
  providers: [
    CountryService
  ],
  exports: [
    SearchComponent
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
