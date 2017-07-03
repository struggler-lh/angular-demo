import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  ids: Array<number> = [1,2,3,4,5,6,7];

  constructor() { }

  ngOnInit() {
  }

}
