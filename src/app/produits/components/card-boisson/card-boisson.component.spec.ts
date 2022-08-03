import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBoissonComponent } from './card-boisson.component';

describe('CardBoissonComponent', () => {
  let component: CardBoissonComponent;
  let fixture: ComponentFixture<CardBoissonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBoissonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBoissonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
