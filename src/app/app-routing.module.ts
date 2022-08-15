import { AddLoansComponent } from './add-loans/add-loans.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansComponent } from './loans/loans.component';

const routes: Routes = [
  {
  path: 'loans',
  component: LoansComponent
},
{
  path: 'loans/add-loan',
  component: AddLoansComponent
},
{
  path: 'loan-types',
  component: LoanTypesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
