import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLigneCommandeComponent } from './item-ligne-commande.component';

describe('ItemLigneCommandeComponent', () => {
  let component: ItemLigneCommandeComponent;
  let fixture: ComponentFixture<ItemLigneCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemLigneCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemLigneCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
