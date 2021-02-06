import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormLoginModule } from 'src/app/shared/modules/form-login/form-login.module';
import { DesktopLoginComponent } from './desktop-login/desktop-login.component';
import { MobileLoginComponent } from './mobile-login/mobile-login.component';

@NgModule({
  imports: [
    CommonModule,
    FormLoginModule
  ],
  exports: [
    LoginComponent
  ],
  declarations: [
    LoginComponent,
    DesktopLoginComponent,
    MobileLoginComponent
  ]
})
export class LoginModule { }
