import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private _router: Router){}

    navigateToProducts(): void{
        console.log('AppComponent 内的到ProductsComponent的导航');
        this._router.navigate(['/products']);
    }

}