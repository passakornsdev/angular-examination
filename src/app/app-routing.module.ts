import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'css', loadChildren: () => import('./modules/learning-css/learning-css.module').then(file => file.LearningCssModule)},
  {
    path: 'understanding-component',
    loadChildren: () => import('./modules/understanding-component/understanding-component.module')
      .then(file => file.UnderstandingComponentModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: 'css/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
