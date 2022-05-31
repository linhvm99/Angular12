import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServerService {

  private REST_API_SERVER = 'http://localhost:3000';
  private REST_API_SERVER_RANDOM_USER = 'https://randomuser.me/api/?results=';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {}

  // GET COMMENTS
  public getComments(): Observable<any> {
    const url = `${this.REST_API_SERVER}/comments`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }


  // GET USERS
  public getRandomUsers(users: number = 1): Observable<any> {
    const url = `${this.REST_API_SERVER_RANDOM_USER}` + users;
    return this.httpClient.get<any>(url, this.httpOptions);
  }


  // POST COMMENTS
  public postComments(payload: any): Observable<any>{

    const url = `${this.REST_API_SERVER}/comments`;
    console.log('Payload url: ', url);
    console.log('Post comments: ', payload);
    return this.httpClient.post<any>(url, payload, this.httpOptions);
  }

  public deleteComments(id: number): Observable<any> {
    const url = `${this.REST_API_SERVER}/id=` + id;
    console.log('URL: ', url);
    return this.httpClient.delete<any>(url, this.httpOptions);
  }
}
