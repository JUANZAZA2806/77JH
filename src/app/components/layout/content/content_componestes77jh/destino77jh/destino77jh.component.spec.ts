import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Destino77jhComponent } from './destino77jh.component';

describe('Destino77jhComponent', () => {
  let component: Destino77jhComponent;
  let fixture: ComponentFixture<Destino77jhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Destino77jhComponent]
    });
    fixture = TestBed.createComponent(Destino77jhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
