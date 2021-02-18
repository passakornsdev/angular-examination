import {Injectable} from '@angular/core';
import {HttpBackend, HttpClient} from '@angular/common/http';

@Injectable()
export class AnonymousHttpClient extends HttpClient {

  constructor(private httpBackend: HttpBackend) {
    super(httpBackend);
  }
}
