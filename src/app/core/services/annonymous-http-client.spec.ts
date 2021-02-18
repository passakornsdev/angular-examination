import { TestBed } from '@angular/core/testing';

import { AnonymousHttpClient } from './anonymous-http-client';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('AnonymousHttpClientService', () => {
  let service: AnonymousHttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        AnonymousHttpClient
      ]
    });
    service = TestBed.inject(AnonymousHttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should contain authorization header', () => {
    service.get('/user/detail').subscribe();
    const req = httpTestingController.expectOne('/user/detail');
    expect(req.request.headers.get('Authorization')).toEqual(null);
    req.flush({});
    httpTestingController.verify();
  });

  afterEach(() => {
    httpTestingController.verify();
  })
});
