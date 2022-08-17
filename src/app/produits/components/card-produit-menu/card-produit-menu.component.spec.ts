import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProduitMenuComponent } from './card-produit-menu.component';

describe('CardProduitMenuComponent', () => {
  let component: CardProduitMenuComponent;
  let fixture: ComponentFixture<CardProduitMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProduitMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProduitMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
