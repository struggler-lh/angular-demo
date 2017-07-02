import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';

function ssnValidator(control: FormControl): { [key: string]: any }{
    let value: string = control.value || '',
        valid = value.match(/^\d{9}$/);
    return valid ? null : {'ssn': true};
}

@Directive({
  selector: '[appSsnValidator]',
  providers: [{provide: NG_VALIDATORS, useValue: ssnValidator, multi: true}]
})
export class SsnValidatorDirective {

  constructor() { }

}
