import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-customers',
  templateUrl: './edit-customers.component.html',
  styleUrls: ['./edit-customers.component.css']
})
export class EditCustomersComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
   
  }
  updateUser(){
    this.usersService.updateUser().subscribe(data => {
      console.log(data);
    },(err)=>{
      console.log(err);
    })
    }

}
