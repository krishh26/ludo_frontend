import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  imageChangeEvent: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);;

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
      return JSON.parse(loginUser);
    }
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

  emitImageChangeEvent(imageData: string): void {
    this.imageChangeEvent.next(imageData);
  }

  getImageData(): BehaviorSubject<string | null> {
    return this.imageChangeEvent;
  }
}
