import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IPosts } from '../models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl = `${environment.API_BASE_URL}/posts`;

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

  getPosts(): Observable<IPosts[]> {
    const url = `${this.baseUrl}`;
    return this.httpClient.get<IPosts[]>(url, this.options);
  }

  getPostByID(id: number): Observable<IPosts[]> {
    const posts: IPosts[] = []
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<IPosts>(url, this.options).pipe(
      map(post => {
        posts.push(post);
        return posts;
      })
    );
  }

  getPostByIDWithComments(id: number): Observable<IPosts[]> {
    const url = `${this.baseUrl}/${id}/comments`;
    console.log(url);
    return this.httpClient.get<IPosts[]>(url, this.options);
  }

  createPost(post: IPosts): Observable<any> {
    const url = `${this.baseUrl}`;
    return this.httpClient.post<any>(url, post, this.options);
  }

  updatePost(post: IPosts): Observable<any> {
    const url = `${this.baseUrl}/${post.id}`;
    return this.httpClient.put<any>(url, post, this.options);
  }


  deletePost(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete<any>(url, this.options)
  }

}
