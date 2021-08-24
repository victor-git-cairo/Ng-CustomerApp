import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  filteredCustomers: any[] = [];
  customersOrderTotal: number = 0;
  currencyCode: string = 'USD';

  constructor() { }

  ngOnInit(): void {
  }

}
