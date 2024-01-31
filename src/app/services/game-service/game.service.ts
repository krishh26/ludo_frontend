import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export enum APIEndPOint {
  CREATE_BATTLE = "/game/get-game-code",
  GET_GAME_HISTORY = "/game/get-battle-list",
  PLAY_GAME = "/game/pay-game"
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  baseUrl!: string;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
    this.baseUrl = environment.baseUrl;
  }

  // create game table or battle
  createGameTable(payload: any): Observable<any> {
    return this.httpClient
      .post<any>(this.baseUrl + APIEndPOint.CREATE_BATTLE, payload);
  }

  //  get game history or get battle details
  getBattleList(): Observable<any> {
    return this.httpClient
      .get<any>(this.baseUrl + APIEndPOint.GET_GAME_HISTORY);
  }

  // create game table or battle
  playGame(payload: any): Observable<any> {
    return this.httpClient
      .post<any>(this.baseUrl + APIEndPOint.PLAY_GAME, payload);
  }
}
