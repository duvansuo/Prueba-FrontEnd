import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateOrderComponent } from './components/order/create-order/create-order.component';
import { ListOrderComponent } from './components/order/list-order/list-order.component';
const routes: Routes = [
  { path: 'orders/create', component: CreateOrderComponent },
  { path: 'orders/list', component: ListOrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
