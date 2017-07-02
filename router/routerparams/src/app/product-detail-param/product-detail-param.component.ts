import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail-param',
  templateUrl: './product-detail-param.component.html',
  styleUrls: ['./product-detail-param.component.css']
})
export class ProductDetailParamComponent implements OnInit {

    productId: string;
    inStock: boolean;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
      this.productId = this._route.snapshot.params['id'];
      this.inStock = this._route.snapshot.data['inStock'];
      console.log('this.inStock = ' + this.inStock);
  }

}
