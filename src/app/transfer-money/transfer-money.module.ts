import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { TransferMoney } from './containers/transfer-money/transfer-money.component';

import { TransferMoneyForm } from './containers/transfer-money-form/transfer-money-form.component';
import { IBANComponent } from '@seamless/transfer-money/components/iban/iban.component';

import { IBANDirective } from './components/iban/iban.directive';
import { ApiService } from './services/api.service';


const modules = [
  TransferMoney,
  TransferMoneyForm,
  IBANDirective,
  IBANComponent
];


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: modules,
  exports: [
    TransferMoney
  ],
  providers: [ApiService],
})
export class TransferMoneyModule {}
