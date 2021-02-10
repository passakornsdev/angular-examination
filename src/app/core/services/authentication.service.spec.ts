import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TokenResponseModel} from '../models/token-response.model';
import {environment} from '../../../environments/environment';

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(AuthenticationService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('token req should have correct headers', () => {
    service.passwordGrant('test', 'password')
      .subscribe();
    const req = httpTestingController.expectOne(environment.oauthUrl + 'oauth/token');
    expect(req.request.method).toEqual('POST');
    expect(req.request.headers.get('Authorization')).toBeDefined();
    expect(req.request.headers.get('Content-Type')).toBeDefined();
    expect(req.request.headers.get('Content-Type')).toContain('application/x-www-form-urlencoded');
    req.flush({access_token: 'abc', refresh_token: 'def'} as TokenResponseModel);
    httpTestingController.verify();
  });

  it('local storage should have oauth credential', () => {
    const oauthCredentialStr = localStorage.getItem(service.OAUTH_CREDENTIAL_STORAGE_NAME);
    expect(oauthCredentialStr).toBeDefined();
    // @ts-ignore
    const oauthCredential: TokenResponseModel = JSON.parse(oauthCredentialStr);
    expect(oauthCredential.access_token).toBeDefined();
    expect(oauthCredential.access_token).toEqual('abc');
    expect(oauthCredential.refresh_token).toEqual('def');
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
