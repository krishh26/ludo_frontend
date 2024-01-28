import { Component } from '@angular/core';
import { WalletWithdrawServiceService } from 'src/app/services/wallet-withdraw-service/wallet-withdraw-service.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent {
  totalAmount : any = 0;

  constructor (
    private walletService : WalletWithdrawServiceService
  ) {
    // this.loginUser = this.localStorageService.getLogger();
    this.walletService.userTotalAmount$.subscribe((amount) => this.totalAmount = amount);
  }
}
