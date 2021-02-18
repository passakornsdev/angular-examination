import {TestBed} from '@angular/core/testing';

import {OauthTokenInterceptor} from './oauth-token.interceptor';
import {AuthenticationService} from '../services/authentication.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HTTP_INTERCEPTORS, HttpClient, HttpRequest} from '@angular/common/http';
import {of} from 'rxjs';
import {login} from '../services/authentication.service.spec';
import {AnonymousHttpClient} from '../services/anonymous-http-client';

describe('OauthTokenInterceptor', () => {
  let httpTestingController: HttpTestingController;
  let authenticationService: AuthenticationService;
  let oauthTokenInterceptor: OauthTokenInterceptor;
  let httpClient: HttpClient;

  beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule
        ],
        providers: [
          AnonymousHttpClient,
          OauthTokenInterceptor,
          {provide: HTTP_INTERCEPTORS, useClass: OauthTokenInterceptor, multi: true}
        ]
      });
      httpClient = TestBed.inject(HttpClient);
      httpTestingController = TestBed.inject(HttpTestingController);
      authenticationService = TestBed.inject(AuthenticationService);
      oauthTokenInterceptor = TestBed.inject(OauthTokenInterceptor);
    }
  );

  it('should be created', () => {
    expect(oauthTokenInterceptor).toBeTruthy();
  });

  it('return interceptor error for anonymous user', () => {
    //  create handler request
    authenticationService.logout();
    const next: any = {
      handle: (request: HttpRequest<any>) => {
        // expect(request.headers.has('Authorization')).toBeTruthy();
        // expect(request.headers.get('Authorization')).toEqual('Bearer first token');
        return of({});
      }
    };

    // create req
    const req = new HttpRequest<any>('GET', '/data');
    oauthTokenInterceptor
      .intercept(req, next)
      .subscribe(() => {

      }, err => {
        expect(err.error).toEqual('cannot request authenticated api with anonymous credential');
        expect(err.status).toEqual(400);
      });
  });

  it('should contain authorization header', () => {
    login(authenticationService, httpTestingController);
    httpClient.get('/me').subscribe();
    const req = httpTestingController.expectOne('/me');
    expect(req.request.headers.get('Authorization')).not.toEqual(null);
    req.flush({});
    httpTestingController.verify();
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
