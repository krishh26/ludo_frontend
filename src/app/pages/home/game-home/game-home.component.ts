import { NotificationService } from './../../../services/notification/notification.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { WalletWithdrawServiceService } from 'src/app/services/wallet-withdraw-service/wallet-withdraw-service.service';
import { GameService } from 'src/app/services/game-service/game.service';
import { SUCCESS } from '../../constant/response-status.const';

@Component({
  selector: 'app-game-home',
  templateUrl: './game-home.component.html',
  styleUrls: ['./game-home.component.scss']
})
export class GameHomeComponent implements OnInit {
  loginUser: any;
  walletAmount: any = 0;
  battleList: any[] = [];

  battleAmount: FormControl = new FormControl();

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private walletService: WalletWithdrawServiceService,
    private notificationService: NotificationService,
    private gameService: GameService
  ) {
    this.loginUser = this.localStorageService.getLogger();
    this.walletService.userTotalAmount$.subscribe((amount) => this.walletAmount = amount);
  }

  ngOnInit(): void {
    this.getBattleList();
  }

  // go to rules page
  public rule() {
    this.router.navigate(['/home/rule']);
  }

  // get battle list
  public async getBattleList() {
    this.battleList = [];
    this.gameService.getBattleList().subscribe((response) => {
      if(response?.status == SUCCESS) {
        this.battleList = response?.payload?.data;
        console.log(this.battleList)
      } else {
        this.notificationService.showError('Something went wrong.');
      }
    }, (error) => {
      this.notificationService.showError('Something went wrong.');
    });
  }


  // Create battle
  public createBattle(): any {
    if (!this.battleAmount.value) {
      console.log("Please Enter Battle Amount.");
      return this.notificationService.showError('Please Enter Battle Amount.');
    }

    if (this.battleAmount.value < 50) {
      console.log("Minimum Battle Amount must be 50.");
      return this.notificationService.showError('Minimum Battle Amount must be 50.');
    }

    if (this.battleAmount.value > Number(this.walletAmount)) {
      console.log("Please Check Wallet Amount.");
      return this.notificationService.showError('Please Add Amount In Wallet.');
    }

    const payload = {
      user_id: this.loginUser?.id,
      amount: this.battleAmount.value,
      name: this.loginUser?.ludo_name
    }

    this.gameService.createGameTable(payload).subscribe((response) => {
      if (response?.status == SUCCESS) {
        console.log('testing game table', response);
        this.getBattleList();
        this.notificationService.showSuccess(response?.message || 'Game created.');
      } else {
        this.notificationService.showError('Please Retry Game Not Created');
      }
    }, (error) => {
      this.notificationService.showError('Please Retry Game Not Created');
    });
  }

  // play game
  public playGame(battleId: number) {
    if(!battleId) {
      return this.notificationService.showError('Error');
    }

    const payload = {
      battle_id : battleId,
      user_id: this.loginUser?.id,
      name: this.loginUser?.ludo_name
    }

    this.gameService.playGame(payload).subscribe((response) => {
      if(response?.status == SUCCESS) {
        console.log(response)
        this.getBattleList()
      } else {
        this.notificationService.showError('Something Went Wrong');
      }
    }, (error) => {
      this.notificationService.showError('Something Went Wrong');
    });
  }
}
