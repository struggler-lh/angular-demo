import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailParamComponent } from './product-detail-param.component';

describe('ProductDetailParamComponent', () => {
  let component: ProductDetailParamComponent;
  let fixture: ComponentFixture<ProductDetailParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
