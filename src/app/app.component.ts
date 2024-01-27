import { Component } from '@angular/core';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ludo-game';
  loginUser: any;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
  ) {
    this.loginUser = this.localStorageService.getLogger();
  }

  ngOnInit(): void {
    if (!this.loginUser) {
      this.router.navigateByUrl('/')
    }
  }
}
