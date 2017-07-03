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

    //activedRoute api
    // url: 该路由路径的Observable对象。它的值是一个由路径中各个部件组成的字符串数组。
    // data: 该路由提供的data对象的一个Observable对象。还包含从resolve守卫中解析出来的值。
    // params: 包含该路由的必选参数和可选参数的Observable对象。
    // queryParams: 一个包含对所有路由都有效的查询参数的Observable对象。
    // fragment: 一个包含对所有路由都有效的片段值的Observable对象。
    // outlet: RouterOutlet的名字，用于指示渲染该路由的位置。对于未命名的RouterOutlet，这个名字是primary。
    // routeConfig: 与该路由的原始路径对应的配置信息。
    // parent: 当使用子路由时，它是一个包含父路由信息的ActivatedRoute对象。
    // firstChild: 包含子路由列表中的第一个ActivatedRoute对象。
    // children: 包含当前路由下激活的全部子路由。

  }

  goBack(): void{
      this.location.back();
  }

}
