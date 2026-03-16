import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Crearproducto } from './crearproducto';

describe('Crearproducto', () => {
  let component: Crearproducto;
  let fixture: ComponentFixture<Crearproducto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Crearproducto],
    }).compileComponents();

    fixture = TestBed.createComponent(Crearproducto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
