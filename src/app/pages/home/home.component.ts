import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private router: Router
  ) {}
  // showFiller = false;
  public logOut() {
    this.router.navigate(['/login']);
  }
  public profilePage() {
    this.router.navigate(['/profile']);
  }
  
}
