import { ProductComponent } from './product/product.component';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansComponent } from './loans/loans.component';

const routes: Routes = [
  {
  path: 'loans-types',
  component: LoanTypesComponent,
 
  children:[
    {
      path: 'add-loan',component: AddLoansComponent
    }
  ]
},
{
  path: 'add',
  redirectTo: 'loans-types'
  
},{
  path: 'product/:id',
  component: ProductComponent
},{
  path: 'product/:productId/photos/:photoId',
  component: ProductComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
