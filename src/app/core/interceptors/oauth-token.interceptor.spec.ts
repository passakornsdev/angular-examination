import { TestBed } from '@angular/core/testing';

import { OauthTokenInterceptor } from './oauth-token.interceptor';
import { AuthenticationService } from '../services/authentication.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TokenResponseModel } from '../models/token-response.model';
import { environment } from '../../../environments/environment';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

describe('OauthTokenInterceptor', () => {
  let httpTestingController: HttpTestingController;
  let authenticationService: AuthenticationService;
  let oauthTokenInterceptor: OauthTokenInterceptor;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        OauthTokenInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: OauthTokenInterceptor,
          multi: true,
        },
      ],
    });
    oauthTokenInterceptor = TestBed.inject(OauthTokenInterceptor);
    httpClient = TestBed.inject(HttpClient);
    authenticationService = TestBed.inject(AuthenticationService);
    httpTestingController = TestBed.inject(HttpTestingController);
    authenticationService.passwordGrant('test', 'password').subscribe();
    const req = httpTestingController.expectOne(
      environment.oauthUrl + 'oauth/token'
    );
    req.flush({
      access_token: 'abc',
      refresh_token: 'def',
    } as TokenResponseModel);
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(oauthTokenInterceptor).toBeTruthy();
  });

  it('should contain authorization header', () => {
    httpClient.get('/user/detail').subscribe();
    const req = httpTestingController.expectOne('/user/detail');
    expect(req.request.headers.get('Authorization')).not.toEqual(null);
    req.flush({});
    httpTestingController.verify();
  });

  it('skip auth req should not contain auth header', () => {
    httpClient
      .post('/register', {}, { headers: { skipAuth: '1' } })
      .subscribe();
    const req = httpTestingController.expectOne('/register');
    expect(req.request.headers.get('Authorization')).toEqual(null);
    req.flush({});
    httpTestingController.verify();
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
