import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenResponseModel} from '../models/token-response.model';
import {AuthenticationService} from '../services/authentication.service';

@Injectable()
export class OauthTokenInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tokenResponseModel: TokenResponseModel | null = this.authenticationService.getOAuthCredential();
    const skipAuthHeader = request.headers.get('skipAuth');
    if (tokenResponseModel && !skipAuthHeader) {
      request = request.clone({
        headers: new HttpHeaders({
          Authorization: tokenResponseModel.access_token
        })
      });
    }
    return next.handle(request);
  }
}
