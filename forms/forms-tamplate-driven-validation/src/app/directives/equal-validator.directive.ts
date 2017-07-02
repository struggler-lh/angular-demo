import { Directive } from '@angular/core';
import { FormGroup, NG_VALIDATORS } from '@angular/forms';

function equalValidator({value}: FormGroup): { [key: string]: any }{
    let [first, ...rest] = Object.keys(value || {}),
        valid = rest.every(v => value[v] === value[first])
    return valid ? null : {equal: true};
}

@Directive({
  selector: '[appEqualValidator]',
  providers: [{provide: NG_VALIDATORS, useValue: equalValidator, multi: true}]
})
export class EqualValidatorDirective {
}
