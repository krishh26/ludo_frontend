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
  hideShowMenuButton : boolean = false;

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private walletService : WalletWithdrawServiceService
  ) {
    this.loginUser = this.localStorageService.getLogger();
    this.walletService.userTotalAmount$.subscribe((amount) => this.totalAmount = amount);
  }

  ngOnInit(): void {
    if(this.loginUser) {
      this.walletService.getWalletAmount();
    }
  }
  // showFiller = false;
  public logOut() {
    this.router.navigate(['/home/home']);
    this.localStorageService.clearStorage();
    this.loginUser = this.localStorageService.getLogger();
    // window.location.reload();
  }

  public profilePage() {
    this.router.navigate(['/profile']);
  }

  public hideShowMenu() {
    this.hideShowMenuButton = !this.hideShowMenuButton;
  }
}
