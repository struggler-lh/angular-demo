import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Router404Component } from './router404.component';

describe('Router404Component', () => {
  let component: Router404Component;
  let fixture: ComponentFixture<Router404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Router404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Router404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
