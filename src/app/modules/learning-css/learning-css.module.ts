import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningCssRoutingModule } from './learning-css-routing.module';
import {HomeComponent} from "./pages/home/home.component";
import {HeaderComponent} from "./components/header/header.component";
import {SharedModule} from "../../shared/shared.module";
import { LearningCssAppComponent } from './components/learning-css-app/learning-css-app.component';
import { FooterComponent } from './components/footer/footer.component';
import { PackagesScreenComponent } from './pages/packages-screen/packages-screen.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    LearningCssAppComponent,
    FooterComponent,
    PackagesScreenComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    LearningCssRoutingModule
  ]
})
export class LearningCssModule { }
