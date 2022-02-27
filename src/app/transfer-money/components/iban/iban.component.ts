import { Component, Input, OnChanges, ViewChild, ElementRef,  AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'iban',
  templateUrl: 'iban.component.html',
  styleUrls: ['./iban.component.scss']
})
export class IBANComponent implements OnChanges {
  @Input()
  parent: FormGroup;

  @Input()
  countryCode: string;

  @Input()
  displayFlag: boolean = false;

  @Input()
  ibanLength: number = 15;

  @Input()
  displayInvalidIban: boolean = false;

  ngOnChanges(changes) {
    console.log('changes', changes);

  }
}
