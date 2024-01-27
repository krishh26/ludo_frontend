import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { WalletWithdrawServiceService } from 'src/app/services/wallet-withdraw-service/wallet-withdraw-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loginUser : any;
  totalAmount: any = 0;

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private walletService : WalletWithdrawServiceService
  ) {
    this.loginUser = this.localStorageService.getLogger();
    this.walletService.userTotalAmount$.subscribe((amount) => this.totalAmount = amount);
  }

  ngOnInit(): void {
    this.walletService.getWalletAmount();
  }
  // showFiller = false;
  public logOut() {
    this.localStorageService.clearStorage();
    this.router.navigate(['/home/home']);
  }

  public profilePage() {
    this.router.navigate(['/profile']);
  }
}
