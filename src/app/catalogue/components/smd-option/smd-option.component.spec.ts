import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmdOptionComponent } from './smd-option.component';

describe('SmdOptionComponent', () => {
  let component: SmdOptionComponent;
  let fixture: ComponentFixture<SmdOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmdOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmdOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
