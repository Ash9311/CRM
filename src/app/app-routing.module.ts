import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminAccessGuard } from './admin-access.guard';
import { AdminComponent } from './admin/admin.component';
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
import { SuperAdminGuard } from './super-admin.guard';

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
  path: 'admin',
  canActivate: [SuperAdminGuard],
  children: [
    {
      path:'',
      component: AdminComponent
    },
    {
      path:'',
      canActivateChild: [AdminAccessGuard],
      children: [
        {path:'manage',component: AdminManageComponent},
        {path:'edit',component: AdminEditComponent},
        {path:'delete',component: AdminDeleteComponent}
      ]
    }
  ]
  
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
