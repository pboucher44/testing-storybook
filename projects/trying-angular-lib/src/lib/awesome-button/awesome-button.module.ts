import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwesomeButtonComponent } from './awesome-button.component';

@NgModule({
  declarations: [
    AwesomeButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AwesomeButtonComponent
  ]
})
export class AwesomeButtonModule { }
