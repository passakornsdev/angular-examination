import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ConfirmModalComponent} from "./components/confirm-modal/confirm-modal.component";



@NgModule({
  declarations: [ConfirmModalComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormsModule,
    ConfirmModalComponent
  ],
  entryComponents: [
    ConfirmModalComponent
  ]
})
export class SharedModule { }
