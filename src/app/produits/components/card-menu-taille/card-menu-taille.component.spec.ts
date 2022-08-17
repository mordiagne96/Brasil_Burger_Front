import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMenuTailleComponent } from './card-menu-taille.component';

describe('CardMenuTailleComponent', () => {
  let component: CardMenuTailleComponent;
  let fixture: ComponentFixture<CardMenuTailleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMenuTailleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMenuTailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
