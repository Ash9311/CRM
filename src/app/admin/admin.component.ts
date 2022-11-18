import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  firstname:string = "";
 terms: boolean = false;
  constructor() { }

  customerType: string = "standard";
  addCustomer(formValue: NgForm){
    console.log(formValue.value);
  }

  ngOnInit(): void {
  }

}
