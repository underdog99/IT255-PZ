import { TestBed } from '@angular/core/testing';

import { CryptoRecService } from './crypto-rec.service';

describe('CryptoRecService', () => {
  let service: CryptoRecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoRecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
