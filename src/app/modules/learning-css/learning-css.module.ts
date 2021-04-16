import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningCssRoutingModule } from './learning-css-routing.module';
import {HomeComponent} from "./pages/home/home.component";
import {HeaderComponent} from "./components/header/header.component";
import {SharedModule} from "../../shared/shared.module";
import { LearningCssAppComponent } from './components/learning-css-app/learning-css-app.component';
import { FooterComponent } from './components/footer/footer.component';
import { PackagesScreenComponent } from './pages/packages-screen/packages-screen.component';
import { PositioningComponent } from './pages/positioning/positioning.component';
import { CustomersScreensComponent } from './pages/customers-screens/customers-screens.component';
import { FlexComponent } from './pages/flex/flex.component';
import { CssGridComponent } from './pages/css-grid/css-grid.component';
import { GenerateCssGridComponent } from './pages/generate-css-grid/generate-css-grid.component';
import { ResponsiveCssGridComponent } from './pages/responsive-css-grid/responsive-css-grid.component';
import { AutoflowCssGridComponent } from './pages/autoflow-css-grid/autoflow-css-grid.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    LearningCssAppComponent,
    FooterComponent,
    PackagesScreenComponent,
    PositioningComponent,
    CustomersScreensComponent,
    FlexComponent,
    CssGridComponent,
    GenerateCssGridComponent,
    ResponsiveCssGridComponent,
    AutoflowCssGridComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    LearningCssRoutingModule
  ]
})
export class LearningCssModule { }
