import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  firstname:string = "a";
  
 terms: boolean = false;
  constructor() { }
description: string = "d";
  customerType: string = "standard";
  addCustomer(formValue: NgForm){
    console.log(formValue.value);
  }

  resetForm(formValue: NgForm){
    formValue.reset();
  }

  ngOnInit(): void {
    

  }
  setFormValue(formValue: NgForm){
    let userDetails = {
      firstname: 'Ash',
      terms: false,
      customerType:'1',
      description:'This is set value in Forms'

    }
    formValue.setValue(userDetails);
  }
}
