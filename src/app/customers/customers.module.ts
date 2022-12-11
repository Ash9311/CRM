import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { EditCustomersComponent } from './edit-customers/edit-customers.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';



@NgModule({
  declarations: [
    CustomerComponent,
    EditCustomersComponent,
    DeleteCustomerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CustomerComponent,
    EditCustomersComponent,
    DeleteCustomerComponent
  ]
})
export class CustomersModule { }
