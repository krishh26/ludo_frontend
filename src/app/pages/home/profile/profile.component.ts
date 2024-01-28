import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { WalletWithdrawServiceService } from 'src/app/services/wallet-withdraw-service/wallet-withdraw-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  loginUser!: any;
  totalAmount : any = 0;

  full_name: FormControl = new FormControl('');

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private walletService : WalletWithdrawServiceService
  ) {
    this.loginUser = this.localStorageService.getLogger();
    this.walletService.userTotalAmount$.subscribe((amount) => this.totalAmount = amount);
  }

}
