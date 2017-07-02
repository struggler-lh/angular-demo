import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component7Component } from './component7.component';

describe('Component7Component', () => {
  let component: Component7Component;
  let fixture: ComponentFixture<Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
