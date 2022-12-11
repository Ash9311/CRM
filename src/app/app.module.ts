import { CommonInterceptor } from './common.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
  import { FormsModule } from '@angular/forms';
import { LoansComponent } from './loans/loans.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { AddLoansComponent } from './add-loans/add-loans.component';
 import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ClientsComponent } from './clients/clients.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component'; 
import { UsersModule } from './users/users.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
  import {CustomersModule} from './customers/customers.module';
  import {CustomerComponent} from './customers/customer/customer.component';
@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    LoansComponent,
    LoanTypesComponent,
    AddLoansComponent,
    ProductComponent,
    ClientsComponent,
    AdminComponent,
    SearchComponent,
    PageNotFoundComponent,
    HeaderComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule,
    CustomersModule,
    HttpClientModule,
    UsersModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {provide: HTTP_INTERCEPTORS,useClass: CommonInterceptor,multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
