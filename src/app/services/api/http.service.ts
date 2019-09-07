import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  post(
    url: string,
    body: any,
    contentType = 'application/json'
  ): Observable<any> {
    return this.http.post(url, body, this.createHeader(contentType));
  }

  get(url: string, contentType = 'application/json'): Observable<any> {
    return this.http.get(url, this.createHeader(contentType));
  }

  put(url: string, contentType = 'application/json'): Observable<any> {
    return this.http.put(url, this.createHeader(contentType));
  }

  private createHeader(contentType: string): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': contentType
      })
    };
  }
}
