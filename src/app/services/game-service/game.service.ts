import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { SUCCESS } from 'src/app/pages/constant/response-status.const';

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

  private battleList = new BehaviorSubject<any>([]);
  gameBattleList$ = this.battleList.asObservable();

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

  //  get game history or get battle details
  getAndSetBattleList(): any {
    this.httpClient.get<any>(this.baseUrl + APIEndPOint.GET_GAME_HISTORY).subscribe((response) => {
      if (response?.status == SUCCESS) {
        this.setBattleList(response?.payload?.data);
      }
    });
  }

  // create game table or battle
  playGame(payload: any): Observable<any> {
    return this.httpClient
      .post<any>(this.baseUrl + APIEndPOint.PLAY_GAME, payload);
  }

  setBattleList(list: any[]) {
    this.battleList.next(list);
  }
}
