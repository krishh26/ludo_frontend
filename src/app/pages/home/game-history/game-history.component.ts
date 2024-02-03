import { NotificationService } from './../../../services/notification/notification.service';
import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game-service/game.service';
import { SUCCESS } from '../../constant/response-status.const';

@Component({
  selector: 'app-game-history',
  templateUrl: './game-history.component.html',
  styleUrls: ['./game-history.component.scss']
})
export class GameHistoryComponent implements OnInit {
  gameHistory: any[] = [];

  constructor(
    private gameService: GameService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.getGameHistoryList();
  }

  getGameHistoryList() {
    this.gameService.getGameHistoryForUser().subscribe((response) => {
      if (response?.status == SUCCESS) {
        this.gameHistory = response?.payload?.data;
        console.log('this.gameHistory', this.gameHistory)
      } else {
        this.notificationService.showError('Something Went Wrong.');
      }
    }, (error) => {
      this.notificationService.showError('Something Went Wrong.');
    });
  }
}
