import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillRoutingModule } from './bill-routing.module';
import { BIndexComponent } from './b-index/b-index.component';
import { BDetailsComponent } from './b-details/b-details.component';


@NgModule({
  declarations: [
    BIndexComponent,
    BDetailsComponent
  ],
  imports: [
    CommonModule,
    BillRoutingModule
  ]
})
export class BillModule { }
