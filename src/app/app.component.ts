import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRM';
  success_msg=true;    
  updated_msg=true;
  error_msg=false;

  contacts=[
    {id:1,name:'John',age:23},
    {id:2,name:'Smith',age:25},
    {id:3,name:'Peter',age:30},
    {id:4,name:'Jones',age:27},
    {id:5,name:'Brown',age:28},
  ]

  
}
