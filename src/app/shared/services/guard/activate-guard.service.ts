import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { TokenManagerService } from '../token/token-manager.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuardService {

  constructor(private router: Router, private tokenServiceManager: TokenManagerService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.tokenServiceManager.getToken() != 'Token expirado') {
      return true;
    }
    this.router.navigate([''])
    return false;
  }

}
