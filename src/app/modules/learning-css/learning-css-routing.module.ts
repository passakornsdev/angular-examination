import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LearningCssAppComponent } from './components/learning-css-app/learning-css-app.component';
import { PackagesScreenComponent } from './pages/packages-screen/packages-screen.component';
import { PositioningComponent } from './pages/positioning/positioning.component';
import { CustomersScreensComponent } from './pages/customers-screens/customers-screens.component';
import { FlexComponent } from './pages/flex/flex.component';
import { CssGridComponent } from './pages/css-grid/css-grid.component';
import { GenerateCssGridComponent } from './pages/generate-css-grid/generate-css-grid.component';
import { ResponsiveCssGridComponent } from './pages/responsive-css-grid/responsive-css-grid.component';
import { AutoflowCssGridComponent } from './pages/autoflow-css-grid/autoflow-css-grid.component';
import { StartHostingComponent } from './pages/start-hosting/start-hosting.component';

const routes: Routes = [
  {
    path: '',
    component: LearningCssAppComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'packages', component: PackagesScreenComponent },
      { path: 'customers', component: CustomersScreensComponent },
      { path: 'start-hosting', component: StartHostingComponent },
    ],
  },
  { path: 'position', component: PositioningComponent },
  { path: 'flex', component: FlexComponent },
  { path: 'grid', component: CssGridComponent },
  { path: 'gen-grid', component: GenerateCssGridComponent },
  { path: 'responsive-grid', component: ResponsiveCssGridComponent },
  { path: 'auto-flow-grid', component: AutoflowCssGridComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearningCssRoutingModule {}
