import { Component, OnInit } from '@angular/core';

import { ApiService } from '@seamless/transfer-money/services/api.service';


@Component({
  selector: 'transfer-money',
  templateUrl: 'transfer-money.component.html',
  styles: ['transfer-money.component.scss'],
})
export class TransferMoney implements OnInit {

  balance: number;
  form: any;
  detail: TransferMoney;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getBalance()
      .subscribe(
        (resp) => this.balance = resp?.data?.balance,
        (error) => console.error(error)
      );
  }

  onSubmit(event) {
    console.log('event', event);
    this.form = event;
    this.apiService.transfer(this.form.get('iban').value, this.form.value);
  }
}
