import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor( private route: Router ) { }

  ngOnInit() {
  }

  gotoComponent4(): void{
      // Router.navigate
      this.route.navigate(['/component', 8]);
  }

}
