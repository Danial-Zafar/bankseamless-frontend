import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { take } from 'rxjs/operators';

import { TransferMoney } from '@seamless/transfer-money/models/transfer-money.interface';

import { countryIbanLookup } from '@seamless/transfer-money/data/iban-lookup.reference';

import { ApiService } from '@seamless/transfer-money/services/api.service';


@Component({
  selector: 'transfer-money-form',
  templateUrl: 'transfer-money-form.component.html',
  styles: ['transfer-money-form.component.scss'],
})
export class TransferMoneyForm implements OnInit, OnChanges {

  transferMoneyForm: FormGroup;
  @Input() balance: number;

  displayFlag: boolean = false;
  countryCode: string = null;
  ibanLength: number;
  displayInvalidIban: boolean = false;

  currencyCode: string = '';

  constructor(private fb: FormBuilder, private apiService: ApiService) {

  }

  ngOnInit() {
    this.transferMoneyForm = this.fb.group({
      iban: [''],
      amount: ['']
    });

    this.transferMoneyForm.get('iban').valueChanges
      .subscribe((iban) => {
        console.log('iban', iban);
        if (iban.length == 2) {
          if (/^[A-Z]{2}$/i.test(iban.substr(0, 2))) {
            this.countryCode = iban.substr(0, 2).toLowerCase();
            const lookup = countryIbanLookup[this.countryCode.toUpperCase()];
            if (lookup) {
              this.ibanLength = lookup[1];
              this.currencyCode = lookup[0];
              this.displayFlag = false;
              this.displayInvalidIban = false;

            } else {
              this.ibanLength = 15;
              this.displayFlag = true;
              this.displayInvalidIban = true;
            }
            this.displayFlag = true;
          } else {
            this.displayFlag = false;
          }
        } else {
          this.displayFlag = false;
        }

        if (iban.length > this.ibanLength) {
          this.apiService.getBank(iban.split(' ').join(''))
            .subscribe((resp) => console.log(resp.data),
              (error) => console.error(error));
        }
      });
  }

  ngOnChanges() {
    // this.formDetail = this.transferMoneyForm.value;
  }

  onSubmit() {
    // console.log('submit', this.transferMoneyForm.value);
    if (this.transferMoneyForm.valid) {
      // this.apiService.transfer(this.transferMoneyForm.get('iban').value, this.transferMoneyForm.value);
    }
  }

}
