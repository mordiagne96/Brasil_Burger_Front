import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProduitCommandeComponent } from './card-produit-commande.component';

describe('CardProduitCommandeComponent', () => {
  let component: CardProduitCommandeComponent;
  let fixture: ComponentFixture<CardProduitCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProduitCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProduitCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
