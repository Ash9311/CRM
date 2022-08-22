import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
  import { FormsModule } from '@angular/forms';
import { LoansComponent } from './loans/loans.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { AddLoansComponent } from './add-loans/add-loans.component';
 import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ProductComponent } from './product/product.component'; 
  
@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    LoansComponent,
    LoanTypesComponent,
    AddLoansComponent,
    ProductComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
