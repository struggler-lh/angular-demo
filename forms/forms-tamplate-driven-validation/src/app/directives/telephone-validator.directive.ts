import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';

function telephoneValidator(control: FormControl): {[ key: string]: any}{
    let value: string = control.value || "",
        valid = value.match(/^\d{11}$/);
    return valid ? null : {telephone: true};
}

@Directive({
  selector: '[appTelephoneValidator]',
  providers: [{provide: NG_VALIDATORS, useValue: telephoneValidator, multi: true}]
})
export class TelephoneValidatorDirective {
}
