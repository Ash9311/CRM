import { ContactsService } from './../contacts.service';
import { Component, OnInit } from '@angular/core';
import { of, Observable, observable } from 'rxjs';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  contacts$:any;
  users: any;
  userStatus:any;
  listUsers$: any;
  userDetails$: any;
  userMsg: any;
  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.users = ['ram','ash','itachi','mark']
    this.contacts$ = of(this.users);

    new Observable(observer => {
      setTimeout(()=> {
        observer.next('In Progress')
      },2000);

      setTimeout(()=> {
        observer.next('Pending')
      },4000);

      setTimeout(()=> {
        observer.next('Completed')  
      },6000);
    }).subscribe(data => {
        this.userStatus = data;
    }, error => {
      console.log();
      
    });

    this.contactsService.getUsers().subscribe(data => {
      this.listUsers$ = data;
      console.log(this.listUsers$);
      
    }, error => {
      console.log(error);
    })
//toPromise means get the data once and stop
    this.contactsService.viewUsers().toPromise()
    .then(response => {
      this.userDetails$ = response;
    })
    .catch(error => {
      console.log(error);
    })
    .finally(()=> {
      this.userMsg = "User details loaded"
    })
  }

}
