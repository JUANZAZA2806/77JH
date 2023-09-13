import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newyorjh77Component } from './newyorjh77.component';

describe('Newyorjh77Component', () => {
  let component: Newyorjh77Component;
  let fixture: ComponentFixture<Newyorjh77Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Newyorjh77Component]
    });
    fixture = TestBed.createComponent(Newyorjh77Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
