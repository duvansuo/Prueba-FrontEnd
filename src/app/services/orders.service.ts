import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpClient: HttpClient) { }

  createOrder(order: any) {
    let body = JSON.stringify(order);
    return this.httpClient
      .post(`http://localhost:49372/api/order/register`, body)
  }

  getRecipes() {
    return this.httpClient
      .get(`http://localhost:49372/api/order/GetOrder`)
      .pipe(map((data: any) => {
        return data;
      }))
  }
}
