import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private hideShowMenu = new BehaviorSubject<boolean>(false);
  hideShowMenuButton$ = this.hideShowMenu.asObservable();

  constructor() { }

  // Function to use for the set login user details in localStorage
  setLogger(details: any): void {
    const loginData = JSON.stringify(details?.data);
    localStorage.setItem('loginUser', loginData);
    localStorage.setItem('loginToken', details?.token);
  }

  // Set the updated loginUser details
  updateUserDetails(details: any): void {
    const loginData = JSON.stringify(details);
    localStorage.setItem('loginUser', loginData);
  }

  // Function to use for the get login user details from the localStorage
  getLogger(): void | any {
    const loginUser: any = localStorage.getItem('loginUser');
    if(loginUser !== 'undefined') {
      this.setButtonHideShow(true);
      return JSON.parse(loginUser);
    }
    this.setButtonHideShow(false);
    return null;
  }

  // Function to use for the get login user token from the localStorage
  getLoggerToken(): void {
    const loginToken: any = localStorage.getItem('loginToken');
    return loginToken;
  }

  // Function to use for the clear localStorage
  clearStorage(): void {
    localStorage.clear();
  }

  // set notification count
  setButtonHideShow(flag: boolean) {
    this.hideShowMenu.next(flag);
  }
}
