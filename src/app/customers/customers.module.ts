import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './customers.component';
import { CustomerListComponent } from './customer-list/customer-list.component'; // this is the component

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CustomersComponent,
    CustomerListComponent // this is the component
  ],
   exports: [
     CustomersComponent,
     CustomerListComponent
   ]
})

export class CustomersModule { }
