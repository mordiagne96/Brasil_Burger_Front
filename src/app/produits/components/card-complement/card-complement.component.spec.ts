import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComplementComponent } from './card-complement.component';

describe('CardComplementComponent', () => {
  let component: CardComplementComponent;
  let fixture: ComponentFixture<CardComplementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComplementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
