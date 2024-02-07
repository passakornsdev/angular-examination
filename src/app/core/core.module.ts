import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { OauthTokenInterceptor } from './interceptors/oauth-token.interceptor';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [],
  providers: [
    OauthTokenInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: OauthTokenInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
