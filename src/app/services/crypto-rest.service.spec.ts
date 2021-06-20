import { TestBed } from '@angular/core/testing';

import { CryptoRestService } from './crypto-rest.service';

describe('CryptoRestService', () => {
  let service: CryptoRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
