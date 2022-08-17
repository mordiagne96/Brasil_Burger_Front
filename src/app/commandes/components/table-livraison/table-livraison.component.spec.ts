import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLivraisonComponent } from './table-livraison.component';

describe('TableLivraisonComponent', () => {
  let component: TableLivraisonComponent;
  let fixture: ComponentFixture<TableLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableLivraisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
