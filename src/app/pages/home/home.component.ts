import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  loginUser : any;

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
  ) {
    this.loginUser = this.localStorageService.getLogger();
  }

  // showFiller = false;
  public logOut() {
    this.localStorageService.clearStorage();
    this.router.navigate(['/']);
  }

  public profilePage() {
    this.router.navigate(['/profile']);
  }

}
