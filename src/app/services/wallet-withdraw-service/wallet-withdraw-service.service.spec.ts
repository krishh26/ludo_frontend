import { TestBed } from '@angular/core/testing';

import { WalletWithdrawServiceService } from './wallet-withdraw-service.service';

describe('WalletWithdrawServiceService', () => {
  let service: WalletWithdrawServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalletWithdrawServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
