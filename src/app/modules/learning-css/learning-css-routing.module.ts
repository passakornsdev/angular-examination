import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {LearningCssAppComponent} from "./components/learning-css-app/learning-css-app.component";

const routes: Routes = [
  { path: '', component: LearningCssAppComponent, children: [{ path: 'home', component: HomeComponent }] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearningCssRoutingModule {}
