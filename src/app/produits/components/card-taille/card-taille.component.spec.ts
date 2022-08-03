import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTailleComponent } from './card-taille.component';

describe('CardTailleComponent', () => {
  let component: CardTailleComponent;
  let fixture: ComponentFixture<CardTailleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTailleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
