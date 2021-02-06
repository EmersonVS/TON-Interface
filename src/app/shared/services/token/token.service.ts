import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment'
import { TokenResponse } from '../../interfaces/token-response';
import { User } from '../../interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class TokenService {


constructor(private http:HttpClient) { }

  tokenRequest(user : User) {
    return this.http.post<TokenResponse>(`${environment.ipPublico}/${ environment.endpoint.auth}`, user);
  }

}
