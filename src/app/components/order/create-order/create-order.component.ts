import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  orderForm: FormGroup;
  orderModel: any = {};
  constructor() { }

  ngOnInit() {
    this.initializateForm();
  }

  initializateForm() {
    this.orderForm = new FormGroup({
      'cedula': new FormControl('', Validators.required),
      'nombre': new FormControl('', Validators.required),
      'celular': new FormControl('', Validators.required),
      'direccionReception': new FormControl('', Validators.required),
      'direccionEnvio': new FormControl('', Validators.required),
      'ciudadRecepcion': new FormControl('', Validators.required),
      'ciudadEnvio': new FormControl('', [Validators.required]),
    })
  }

  CreateOrder() {
    if (!this.orderForm.valid) {
      console.log('Open modal with error that happend')
      return;
    }
    this.getData();
    console.log(this.orderModel);
  }

  private getData() {
    this.orderModel.DocumentNumber = this.orderForm.get('cedula').value;
    this.orderModel.Name = this.orderForm.get('nombre').value;
    this.orderModel.CellPhone = this.orderForm.get('celular').value;
    this.orderModel.AddressReceived = this.orderForm.get('direccionReception').value;
    this.orderModel.ShippingAddress = this.orderForm.get('direccionEnvio').value;
    this.orderModel.CityReceived = this.orderForm.get('ciudadRecepcion').value;
    this.orderModel.CityShipping = this.orderForm.get('ciudadEnvio').value;
  }

}
