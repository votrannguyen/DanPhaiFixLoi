import { Component, OnInit } from '@angular/core';
import { customer } from './customer';




@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: customer[] = [
    {customerNo: 1,name: 'Vo Tran Nguyen',address: 'Hoa Quy',city: 'Da Nang',state: 'mien trung',country: 'Viet Nam'},
    {customerNo: 2,name: 'Vo Duong',address: 'Hoa Quy',city: 'Da Nang',state: 'mien trung',country: 'Viet Nam'},
    {customerNo: 1,name: 'Huynh Ba Dan',address: 'Hoa Quy',city: 'Da Nang',state: 'mien trung',country: 'Viet Nam'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
