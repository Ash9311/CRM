import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { EditCustomersComponent } from './edit-customers/edit-customers.component';



@NgModule({
  declarations: [
    CustomerComponent,
    EditCustomersComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CustomerComponent,
    EditCustomersComponent
  ]
})
export class CustomersModule { }
