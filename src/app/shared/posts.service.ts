import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl = `${environment.API_BASE_URL}`;

  /**
   * Setting headers if required
   */

  httpHeaders = new HttpHeaders({
    'Content-type': 'application/json',
  });

  options = {
    headers: this.httpHeaders,
  };

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<any> {
    
    const url = `${this.baseUrl}/posts`;
    return this.httpClient.get(url, this.options);
  }

}
