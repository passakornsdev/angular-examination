import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AfterViewComponent} from './pages/after-view/after-view.component';

const routes: Routes = [
  {path: 'inverting-expected-data-flow', component: AfterViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnderstandingCompoentRoutingModule { }
