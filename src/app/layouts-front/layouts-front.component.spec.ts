import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutsFrontComponent } from './layouts-front.component';

describe('LayoutsFrontComponent', () => {
  let component: LayoutsFrontComponent;
  let fixture: ComponentFixture<LayoutsFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutsFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutsFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
