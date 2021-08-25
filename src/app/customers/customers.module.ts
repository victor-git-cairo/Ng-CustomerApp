import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components lists
import { CustomersComponent } from './customers.component';
import { CustomerListComponent } from './customer-list/customer-list.component'; 
import {FilterTextboxComponent} from './customer-list/filter-textcomponents'

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    // this is the component
    CustomersComponent,
    CustomerListComponent,
    FilterTextboxComponent 
  ],
   exports: [
     CustomersComponent,
     CustomerListComponent,
     FilterTextboxComponent
   ]
})

export class CustomersModule { }
