import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsFiltreComponent } from './items-filtre.component';

describe('ItemsFiltreComponent', () => {
  let component: ItemsFiltreComponent;
  let fixture: ComponentFixture<ItemsFiltreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsFiltreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsFiltreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
