import { AdminGuard } from './admin.guard';
import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchComponent } from './search/search.component';
import { LeadsGridComponent } from './leads/leads-listing/leads-grid/leads-grid.component';
import { ClientsComponent } from './clients/clients.component';
import { ProductComponent } from './product/product.component';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansComponent } from './loans/loans.component';
import { leadingComment } from '@angular/compiler';

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
},
{
  path: '',
  redirectTo: 'leads',
  pathMatch: 'full'
},
{
  path: 'leads',
  component: LeadsGridComponent,
  canActivate: [AdminGuard]
  
},
{
  path: 'product/:productId/photos/:photoId',
  component: ProductComponent
},{
  path: 'clients',
  component: ClientsComponent,
  canActivate: [AuthGuard]
},
{
  path:'search',
  component: SearchComponent
},
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
{ 
  path: '**',
  component: PageNotFoundComponent 
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
