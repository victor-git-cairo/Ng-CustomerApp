import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// components lists
import { SharedModule } from '../shared/shared.modules';
import { CustomersComponent } from './customers.component';
import { CustomerListComponent } from './customer-list/customer-list.component'; 
import {FilterTextboxComponent} from './customer-list/filter-textcomponents';
import { CustomersRoutingModule } from './customer-routingmod'
import { OrdersComponent } from '../orders/orders.component';
import { OrdersModule } from '../orders/orders.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CustomersRoutingModule,
    OrdersModule 
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
     FilterTextboxComponent,
     OrdersComponent
   ]
})

export class CustomersModule { }
