import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material';
import { MatListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatListModule
  ],
  exports: [
    MatInputModule,
    MatListModule
  ],
  declarations: []
})
export class MaterialModule { }
