import { NotificationService } from './../../../services/notification/notification.service';
import { GameService } from 'src/app/services/game-service/game.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SUCCESS } from '../../constant/response-status.const';

@Component({
  selector: 'app-show-game-code',
  templateUrl: './show-game-code.component.html',
  styleUrls: ['./show-game-code.component.scss']
})
export class ShowGameCodeComponent implements OnInit {
  battleDetails: any;
  battleId: any;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private notificationService: NotificationService,
    private router : Router
  ) {
    this.route.params.subscribe((params: any) => {
      console.log(typeof params['gameTableId'])
      this.battleId = params['gameTableId'];
    })
  }

  ngOnInit(): void {
    this.getBattleDetails();
  }

  getBattleDetails() {
    this.gameService.getBattleById(this.battleId).subscribe((response) => {
      if (response?.status == SUCCESS) {
        this.battleDetails = response?.payload?.data;
        if(this.battleDetails?.is_running == 2) {
          this.router.navigateByUrl('/home/game-home');
        }
          console.log('this.battleDetails', this.battleDetails);
        this.notificationService.showSuccess('Game Code Found');
      } else {
        this.notificationService.showError('Something went wrong');
      }
    }, (error) => {
      this.notificationService.showError('Something went wrong');
    });
  }

}
