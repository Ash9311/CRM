import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor() { }

  taxVal:number = 30;
  surname:string = "mulky"
  updatedUsers(event: any){
    console.log(event);
    

  }
  ngOnInit(): void {
  }

}
