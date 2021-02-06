import { Injectable } from '@angular/core';
import { TokenResponse } from '../../interfaces/token-response';
import { TimeService } from '../time/time.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class TokenManagerService {

  private storageKey : string = 'TOKEN';

constructor(private tokenService: TokenService, private timeService : TimeService) { }

  hasToken() : boolean {
    return window.localStorage.getItem(this.storageKey) ? true : false;
  }

  tokenValid() : boolean {
    return this.timeService.timeValid(window.localStorage.getItem('expValue'), window.localStorage.getItem('createdAt'));
  }

  setToken(token : TokenResponse) {
    window.localStorage.setItem('createdAt', this.timeService.timeNow());
    window.localStorage.setItem('expValue', token.expValue);
    window.localStorage.setItem(this.storageKey, `${token.type} ${token.token}`);
  }

  getToken() {
    if(this.hasToken() && this.tokenValid()) {
      return window.localStorage.getItem(this.storageKey);
    }
    this.removeToken();
    return false;
  }

  removeToken() {
    window.localStorage.removeItem(this.storageKey);
    window.localStorage.removeItem('expValue');
    window.localStorage.removeItem('createdAt');
  }

}
