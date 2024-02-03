import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { WalletWithdrawServiceService } from 'src/app/services/wallet-withdraw-service/wallet-withdraw-service.service';
import { SUCCESS } from '../../constant/response-status.const';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  loginUser!: any;
  totalAmount: any = 0;
  updateProfile: boolean = false;

  ludo_name: FormControl = new FormControl('');
  full_name: FormControl = new FormControl('');
  mobile_no: FormControl = new FormControl('');
  email : FormControl = new FormControl('');

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private walletService: WalletWithdrawServiceService,
    private authService: AuthService,
    private notificationService: NotificationService
  ) {
    this.loginUser = this.localStorageService.getLogger();
    this.walletService.userTotalAmount$.subscribe((amount) => this.totalAmount = amount);
    this.ludo_name.setValue(this.loginUser?.ludo_name || null);
    this.full_name.setValue(this.loginUser?.full_name || null);
    this.mobile_no.setValue(this.loginUser?.mobile_no || null);
    this.email.setValue(this.loginUser?.email || null);
  }

  // update ludo name in user table
  updateLudoName() {
    if (!this.ludo_name.value) {
      return this.notificationService.showError('Please Enter Ludo Name');
    }
    const payload = {
      user_id: this.loginUser.id,
      ludo_name: this.ludo_name.value
    }

    this.authService.updateLudoName(payload).subscribe((response) => {
      if (response?.status == SUCCESS) {
        this.notificationService.showSuccess('Ludo Name Updated.');
      } else {
        this.notificationService.showError('Error');
      }
    }, (error) => {
      this.notificationService.showError('Error');
    });
  }

  // LOG OUT
  public logOut() {
    this.router.navigate(['/home/home']);
    this.localStorageService.clearStorage();
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }

  // update user
  updateUser() {
    if (!this.full_name.value) {
      return this.notificationService.showError('Please Enter Full Name');
    }

    if (!this.ludo_name.value) {
      return this.notificationService.showError('Please Enter Ludo Name');
    }

    if (!this.mobile_no.value) {
      return this.notificationService.showError('Please Enter Mobile Number');
    }

    if (!this.email.value) {
      return this.notificationService.showError('Please Enter Email');
    }

    const payload = {
      id: this.loginUser?.id,
      full_name: this.full_name.value,
      ludo_name: this.ludo_name.value,
      mobile_no: this.mobile_no.value,
      email: this.email.value
    }

    this.authService.updateUserDetails(payload).subscribe((response) => {
      if (response?.status == SUCCESS) {
        this.localStorageService.updateUserDetails(response?.payload?.data);
        this.loginUser = this.localStorageService.getLogger();
        this.ludo_name.setValue(this.loginUser?.ludo_name || null);
        this.full_name.setValue(this.loginUser?.full_name || null);
        this.mobile_no.setValue(this.loginUser?.mobile_no || null);
        this.email.setValue(this.loginUser?.email || null);
        this.notificationService.showSuccess('User Details updated successfully');
        this.updateProfile = false;
      } else {
        this.notificationService.showError('Please retry after some time.');
      }
    }, (error) => {
      this.notificationService.showError('Please Retry.');
    })
  }
}
