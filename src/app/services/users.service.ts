import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';

interface User{
  name: string,
  email: string,
  phonenumber: number
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(){
    const headers = new HttpHeaders({
      'content-type':'application/json',
      'authenticationToken':'123'
    });

    const params = new HttpParams().set('pageNum',10).set('pagesize','100');

    return this.http.get<User>('https://jsonplaceholder.typicode.com/users',{headers:headers,params:params});

    //return this.http.get('http://your-api-endpoint');
    // const users = [
    //   {userId: 454,username: 'Ash'},
    //   {userId: 455,username: 'Ashmulky'}
    // ];
    // return users;
  }
}
