import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCheckLivraisonComponent } from './card-check-livraison.component';

describe('CardCheckLivraisonComponent', () => {
  let component: CardCheckLivraisonComponent;
  let fixture: ComponentFixture<CardCheckLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCheckLivraisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCheckLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
