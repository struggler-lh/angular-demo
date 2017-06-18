import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

/*switchMap: observables 操作符，获取参数化路由参数*/
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {

    id: number;

  constructor(
    private route: ActivatedRoute,
    private location: Location
      ) {}
  /*路由过来时通过onInit做业务处理*/
  ngOnInit() { 
    //不使用Observable的方式-snapshot
    let id = +this.route.snapshot.params['id'];
    // console.log(id);
    //使用observable，switchMap方式
    // this.route.params
    //     .switchMap((params: Params) => {console.log(JSON.stringify(params)); return null;})//这里返回null，应该返回一个observable对象，有错误暂时不处理，可以获取到参数
    //     .subscribe(() => {});
  }

  goBack(): void{
      this.location.back();
  }

}
