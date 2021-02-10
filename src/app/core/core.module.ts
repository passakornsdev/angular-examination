import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {OauthTokenInterceptor} from './interceptors/oauth-token.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    OauthTokenInterceptor,
    { provide: HTTP_INTERCEPTORS, useClass: OauthTokenInterceptor, multi: true },
  ]
})
export class CoreModule { }
