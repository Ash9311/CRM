import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.css']
})
export class FilterUsersComponent implements OnInit {

  constructor() { }
  @Input()
  name: string | undefined

  @Input()
  tax:number | undefined

  @Output()
  updatedList = new EventEmitter();


  updateUsers(){
    const userObj = {name:"ash",age:"24"}
    console.log("clicked on update users");
    this.updatedList.emit(userObj);
    
  }
  ngOnInit(): void {
  }

}
