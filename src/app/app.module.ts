import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../environments/environment';

// in memory web api
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemCountryService } from './core/in_memory_db/db';

import { MaterialModule } from './shared/material/material.module';
import { SearchModule } from './search/search.module';
import { LayoutModule } from './layout/layout.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemCountryService, {delay: 1000}),
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({apiKey: environment.agmAPIKey}),
    MaterialModule,
    LayoutModule,
    SearchModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
