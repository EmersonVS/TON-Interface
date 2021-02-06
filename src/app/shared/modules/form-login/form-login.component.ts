import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { User } from '../../class/User';
import { TokenManagerService } from '../../services/token/token-manager.service';
import { TokenService } from '../../services/token/token.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.min(5)]),
    password: new FormControl('', [Validators.required, Validators.min(5)])
  })

  constructor(private library: FaIconLibrary, private tokenManagerService: TokenManagerService, private tokenService: TokenService) {
    library.addIcons(faUser, faLock)
  }

  ngOnInit() {
  }

  onSubmit() {
    const loginUser = new User(this.loginForm);
    this.tokenService.tokenRequest(loginUser).subscribe( tokenResponse => {
      this.tokenManagerService.setToken(tokenResponse);
    })
  }

}
