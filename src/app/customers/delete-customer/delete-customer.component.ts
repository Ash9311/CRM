import { UsersService } from 'src/app/services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
  }

  deleteUser(){
    this.usersService.deleteUser(1).subscribe(data =>
      {console.log("User deleted successfully" +data);
      },(err)=>{
        console.log("unable to delete the user" + err);
        
      });
  }

}
