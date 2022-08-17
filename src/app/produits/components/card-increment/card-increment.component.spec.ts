import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIncrementComponent } from './card-increment.component';

describe('CardIncrementComponent', () => {
  let component: CardIncrementComponent;
  let fixture: ComponentFixture<CardIncrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardIncrementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardIncrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
