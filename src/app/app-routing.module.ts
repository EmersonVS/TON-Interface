import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlPanelComponent } from './core/control-panel/control-panel.component';
import { LoginComponent } from './core/login/login.component';
import { NotFoundComponent } from './shared/modules/not-found/not-found.component';
import { ActivateGuardService } from './shared/services/guard/activate-guard.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'control',
    component: ControlPanelComponent,
    canActivate: [ActivateGuardService]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
