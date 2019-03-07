import { Component, OnInit } from '@angular/core';
import {Order} from '../../Shared/Order';

@Component({
  selector: 'app-section-order',
  templateUrl: './section-order.component.html',
  styleUrls: ['./section-order.component.css']
})
export class SectionOrderComponent implements OnInit {

  constructor() { }
orders: Order[] = 
[
  {id: 1, 
  customer: {id:1,name: "John",state:"CO",email:"ex@example.com"},
  total:250,
  placed: new Date(2015,3,5),
  fullfiled: new Date(2015,3,9),
  status:"Completed"
},

{id: 2, 
  customer: {id:2,name: "Andrzej",state:"Kato",email:"an@example.com"},
  total:40,
  placed: new Date(2016,10,2),
  fullfiled: new Date(2016,10,3),
  status:"Completed"
},

{id: 3, 
  customer: {id:3,name: "Arthur",state:"London",email:"tr@example.com"},
  total:2590,
  placed: new Date(2016,2,1),
  fullfiled: new Date(2016,3,9),
  status:"Completed"
},
{id: 4, 
  customer: {id:4,name: "Kylian",state:"Paris",email:"ps@example.com"},
  total:570,
  placed: new Date(2018,3,5),
  fullfiled: new Date(2018,3,9),
  status:"Completed"
}
];
  ngOnInit() {
  }

}
