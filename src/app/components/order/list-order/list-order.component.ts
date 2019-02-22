import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../../services/orders.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit {

  orders: any[] = [];
  constructor(private _ordersService: OrdersService) { }

  ngOnInit() {
  }

  getAllOrders() {
    this._ordersService.getRecipes()
      .subscribe(data => {
        this.orders = data;
      })
  }

}
