import { Directive, HostListener, HostBinding, ElementRef, Input, Output, EventEmitter } from '@angular/core';


@Directive({
  selector: '[iban]',
  exportAs: 'iban'
})
export class IBANDirective {

  @HostBinding('style.border')
  border: string;

  @Input()
  ibanLength: number = 16;

  input: HTMLInputElement;


  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    /*console.log(event);*/
    this.input = event.target as HTMLInputElement;

    let trimmed = this.input.value.replace(/\s+/g, '');

    if (trimmed.length > this.ibanLength) {
      trimmed = trimmed.substr(0, this.ibanLength);
    }

    let numbers = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4));
    }

    this.input.value = numbers.join(' ');

    this.border = '';
  }

  hide() {
    this.input.classList.remove('tooltip--active');
  }

  show() {
    this.input.classList.add('tooltip--active');
  }

}
