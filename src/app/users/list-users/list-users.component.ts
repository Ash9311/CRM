import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor() { }
user = {}
  taxVal:number = 30;
  surname:string = "mulky"
  updatedUsers(event: any){
    console.log(event);
    this.user = event;
    

  }
  ngOnInit(): void {
  }

}
