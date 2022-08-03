import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemtableCommandeComponent } from './itemtable-commande.component';

describe('ItemtableCommandeComponent', () => {
  let component: ItemtableCommandeComponent;
  let fixture: ComponentFixture<ItemtableCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemtableCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemtableCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
