import { Observable } from 'rxjs';
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



  deleteUser(id: any): Observable<User>{
    const deleteHeaders = new HttpHeaders({
        'authenticationToken': 'User1234',
        'expiryToken': '15'
    });
    const deleteParams = new HttpParams().set('userRole','admin');

    return this.http.delete<User>('https://jsonplaceholder.typicode.com/users/'+id,{headers: deleteHeaders,params:deleteParams});
  }


  updateUser(){

    const putHeaders = new HttpHeaders({
      'content-type':'application/json',
      'authenticationToken':'3124',
      'userId':'testinguser'
    })
    const putParams = new HttpParams().set('userId','testingUser');

    const putBody = {
      name:'Ash',
      userId: 1
    };
    return this.http.put('https://jsonplaceholder.typicode.com/users/1',putBody,{headers: putHeaders,params:putParams});
  }


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
