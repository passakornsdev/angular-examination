import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenResponseModel } from '../models/token-response.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public readonly OAUTH_CREDENTIAL_STORAGE_NAME = 'TESTING_APP_CREDENTIAL';
  private readonly requestTokenHeader: HttpHeaders;
  private tokenEndpoint = environment.oauthUrl + 'oauth/token';

  constructor(private httpClient: HttpClient) {
    this.requestTokenHeader = new HttpHeaders({
      authorization: 'Basic ' + btoa('testapp:pass1234'),
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    });
  }

  passwordGrant(
    username: string,
    password: string
  ): Observable<TokenResponseModel> {
    const formData = new FormData();
    formData.append('grant_type', 'password');
    formData.append('username', username);
    formData.append('password', password);
    return this.httpClient
      .post<TokenResponseModel>(this.tokenEndpoint, formData, {
        headers: this.requestTokenHeader,
      })
      .pipe(tap(res => this.saveOAuthCredential(res)));
  }

  refreshToken(refreshToken: string): Observable<TokenResponseModel> {
    const formData = new FormData();
    formData.append('grant_type', 'refresh_token');
    formData.append('refresh_token', refreshToken);
    return this.httpClient
      .post<TokenResponseModel>(this.tokenEndpoint, formData, {
        headers: this.requestTokenHeader,
      })
      .pipe(tap(res => this.saveOAuthCredential(res)));
  }

  saveOAuthCredential(tokenResponseModel: TokenResponseModel): void {
    localStorage.setItem(
      this.OAUTH_CREDENTIAL_STORAGE_NAME,
      JSON.stringify(tokenResponseModel)
    );
  }

  getOAuthCredential(): TokenResponseModel | null {
    let oauthCredential: TokenResponseModel | null = null;
    const oauthCredentialStr = localStorage.getItem(
      this.OAUTH_CREDENTIAL_STORAGE_NAME
    );
    if (oauthCredentialStr) {
      oauthCredential = JSON.parse(oauthCredentialStr);
    }
    return oauthCredential;
  }
}
