import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { BillingComponent } from '../billing/billing.component';

@Injectable()
export class UnsavedchangesGuard implements CanDeactivate<BillingComponent> {

  canDeactivate() {
    return window.confirm("数据没有保存，确定要离开吗？");
  }

}
