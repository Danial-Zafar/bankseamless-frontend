import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'amount',
  templateUrl: 'amount.component.html',
  styleUrls: ['./amount.component.scss']
})
export class AmountComponent {
  @Input()
  parent: FormGroup;
}
