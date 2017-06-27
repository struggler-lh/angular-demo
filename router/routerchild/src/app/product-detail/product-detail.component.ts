import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

    productId: string;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
      this.productId = this._route.snapshot.params['id'];
  }

}
