import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierLogoComponent } from './panier-logo.component';

describe('PanierLogoComponent', () => {
  let component: PanierLogoComponent;
  let fixture: ComponentFixture<PanierLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanierLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
