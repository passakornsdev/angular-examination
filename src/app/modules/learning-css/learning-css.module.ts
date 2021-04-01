import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningCssRoutingModule } from './learning-css-routing.module';
import {HomeComponent} from "./pages/home/home.component";
import {HeaderComponent} from "./components/header/header.component";


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    LearningCssRoutingModule
  ]
})
export class LearningCssModule { }
