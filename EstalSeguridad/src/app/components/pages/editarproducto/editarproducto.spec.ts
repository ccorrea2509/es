import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editarproducto } from './editarproducto';

describe('Editarproducto', () => {
  let component: Editarproducto;
  let fixture: ComponentFixture<Editarproducto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Editarproducto],
    }).compileComponents();

    fixture = TestBed.createComponent(Editarproducto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
