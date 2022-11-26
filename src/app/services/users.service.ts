import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(){
    //return this.http.get('http://your-api-endpoint');
    const users = [
      {userId: 454,username: 'Ash'},
      {userId: 455,username: 'Ashmulky'}
    ];
    return users;
  }
}
