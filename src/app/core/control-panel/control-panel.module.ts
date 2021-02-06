import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlPanelComponent } from './control-panel.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  exports: [
    ControlPanelComponent
  ],
  declarations: [
    ControlPanelComponent
  ]
})
export class ControlPanelModule { }
