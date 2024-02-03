import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SUCCESS } from 'src/app/pages/constant/response-status.const';

@Component({
  selector: 'app-ludo-game-name',
  templateUrl: './ludo-game-name.component.html',
  styleUrls: ['./ludo-game-name.component.scss']
})
export class LudoGameNameComponent implements OnInit {

  ludo_name: FormControl = new FormControl('');
  loginUser: any;

  constructor(
    private activeModal: NgbActiveModal,
    private authService: AuthService,
    private notificationService: NotificationService,
    private localStorageService: LocalStorageService
  ) {
    this.loginUser = this.localStorageService.getLogger();
  }

  ngOnInit(): void { }

  close(flag?: any) {
    this.activeModal.close(flag);
  }

  submit(): any {
    if (!this.ludo_name.value) {
      return this.notificationService.showError('Please Enter Ludo Name');
    }
    const payload = {
      user_id: this.loginUser.id,
      ludo_name: this.ludo_name.value
    }

    this.authService.updateLudoName(payload).subscribe((response) => {
      if (response?.status == SUCCESS) {
        this.close(response?.payload?.data);
        this.notificationService.showSuccess('Name Updated.');
      } else {
        this.notificationService.showError('Error');
      }
    }, (error) => {
      this.notificationService.showError('Error');
    });
  }
}
