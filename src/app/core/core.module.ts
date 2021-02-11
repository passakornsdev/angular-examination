import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {OauthTokenInterceptor} from './interceptors/oauth-token.interceptor';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, HomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    OauthTokenInterceptor,
    {provide: HTTP_INTERCEPTORS, useClass: OauthTokenInterceptor, multi: true},
  ]
})
export class CoreModule { }
