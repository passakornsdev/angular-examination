import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LearningCssAppComponent } from './components/learning-css-app/learning-css-app.component';
import { PackagesScreenComponent } from './pages/packages-screen/packages-screen.component';
import {PositioningComponent} from "./pages/positioning/positioning.component";
import {CustomersScreensComponent} from "./pages/customers-screens/customers-screens.component";

const routes: Routes = [
  {
    path: '',
    component: LearningCssAppComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'packages', component: PackagesScreenComponent },
      { path: 'customers', component: CustomersScreensComponent },
    ],
  },
  {path: 'position', component: PositioningComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearningCssRoutingModule {}
