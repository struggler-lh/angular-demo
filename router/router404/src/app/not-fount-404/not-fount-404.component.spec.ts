import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFount404Component } from './not-fount-404.component';

describe('NotFount404Component', () => {
  let component: NotFount404Component;
  let fixture: ComponentFixture<NotFount404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFount404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFount404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
