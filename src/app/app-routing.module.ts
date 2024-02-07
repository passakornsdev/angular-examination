import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'css',
    loadChildren: () =>
      import('./modules/learning-css/learning-css.module').then(
        file => file.LearningCssModule
      ),
  },
  { path: '**', pathMatch: 'full', redirectTo: 'css/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
