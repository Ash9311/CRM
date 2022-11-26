import { UsersService } from './../../services/users.service';
import { UsersModule } from './../users.module';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private UsersService:UsersService) {

   }
user = {}
listUsers = {};
  taxVal:number = 30;
  surname:string = "mulky"
  updatedUsers(event: any){
    console.log(event);
    this.user = event;
    

  }
  ngOnInit(): void {
    const users = this.UsersService.getUsers();
    this.listUsers = this.UsersService.getUsers();
    console.log(users);
    
  }

}
