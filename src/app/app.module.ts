import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TransferMoneyModule } from './transfer-money/transfer-money.module';

import { ApiService } from '@seamless/transfer-money/services/api.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TransferMoneyModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
