import { TestBed } from '@angular/core/testing';

import { NumeroTelephoneService } from './numero-telephone.service';

describe('NumeroTelephoneService', () => {
  let service: NumeroTelephoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumeroTelephoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
