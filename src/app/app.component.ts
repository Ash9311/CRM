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
  txtcolorval = 'blue';
  colval = 2;
  pagecount = 10;
  imgUrl = 'test.png';
  imgAlt = 'image is missing'
superpower = "spiderman"
  contacts=[
    {id:1,name:'John',age:23},
    {id:2,name:'Smith',age:25},
    {id:3,name:'Peter',age:30},
    {id:4,name:'Jones',age:27},
    {id:5,name:'Brown',age:28},
  ]
  solve(){
    return 'c4';
  }

  sayHello(){
    alert('hello');
  }
  highlightBGcolor(a: number){
    console.log('being highlighted'+a);
  }
  username ="ash"
tax = 1;
styleprop = "green";
txtcolor = "white";
lowerCaseExample = "ASH";
conditionalClassprop = 'c4';
dateExample = Date.now();
jsonEx = {username:"ash",age:"23",major:"angular"}
currencyEx = 100;
}
