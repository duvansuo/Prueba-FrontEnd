import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { MainSidebarComponent } from './components/shared/main-sidebar/main-sidebar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CreateOrderComponent } from './components/order/create-order/create-order.component';
import { ListOrderComponent } from './components/order/list-order/list-order.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainSidebarComponent,
    FooterComponent,
    CreateOrderComponent,
    ListOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
