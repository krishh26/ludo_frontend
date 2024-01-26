import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { BaseLogin } from '../shared/base-login';
import { SUCCESS } from '../constant/response-status.const';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  defaultLoginForm = {
    userName: new FormControl("", [Validators.required, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$')]),
  };

  verifyEmailForm = new FormGroup(this.defaultLoginForm, []);
  loginUser: any;
  showLoader: boolean = false;

  constructor(
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private notificationService: NotificationService,
  ) {
    // this.loginUser = this.localStorageService.getLogger();
  }

  ngOnInit(): void {
    // if (this.loginUser) {
    //   this.router.navigateByUrl('/home');
    // }
  }

  // Function to use for the login the user
  verifyEmail(): void {
    this.verifyEmailForm.markAllAsTouched();
    if (this.verifyEmailForm.valid) {
      this.showLoader = true;
      this.authService.login(this.verifyEmailForm.value).subscribe((response) => {
        if (response?.status == SUCCESS) {
          this.localStorageService.setLogger(response?.data);
          this.showLoader = false;
          this.router.navigateByUrl('/home');
          this.notificationService.showSuccess(response?.message || 'User login successfully');
        } else {
          this.showLoader = false;
          this.notificationService.showError(response?.message);
        }
      }, (error) => {
        this.showLoader = false;
        this.notificationService.showError(error?.message || 'Something went wrong!');
      })
    }
  }


}
