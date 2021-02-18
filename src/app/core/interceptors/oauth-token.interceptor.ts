import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {TokenResponseModel} from '../models/token-response.model';
import {AuthenticationService} from '../services/authentication.service';

@Injectable()
export class OauthTokenInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tokenResponseModel: TokenResponseModel | null = this.authenticationService.getOAuthCredential();
    if (tokenResponseModel) {
      request = request.clone({
        headers: new HttpHeaders({
          Authorization: tokenResponseModel.access_token
        })
      });
    } else {
      return throwError(
        new HttpErrorResponse({
          error: 'cannot request authenticated api with anonymous credential',
          status: 400,
          url: request.url
        })
      );
    }
    return next.handle(request);
  }
}
