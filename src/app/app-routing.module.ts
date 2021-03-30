import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './core/pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {
    path: 'understanding-component',
    loadChildren: () => import('./modules/understanding-component/understanding-component.module')
      .then(file => file.UnderstandingComponentModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
