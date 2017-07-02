import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthorizeGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.isAuthorized();
  }

  private isAuthorized(): boolean{
      let isAuthorized: boolean = Math.random() < 0.5;
      console.log('isAuthorized = ' + isAuthorized);

      if(!isAuthorized){
          console.log("认证失败！");
      }

      return isAuthorized;
  }

}
