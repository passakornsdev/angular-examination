import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UnderstandingCompoentRoutingModule} from './understanding-compoent-routing.module';
import {ChildViewComponent} from './components/child-view/child-view.component';
import {AfterViewComponent} from './pages/after-view/after-view.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    ChildViewComponent,
    AfterViewComponent
  ],
  imports: [
    CommonModule,
    UnderstandingCompoentRoutingModule,
    SharedModule
  ]
})
export class UnderstandingComponentModule {
}
