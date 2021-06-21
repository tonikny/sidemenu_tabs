import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.httpClient.get('http://demo6402609.mockable.io/users');
  }

}
