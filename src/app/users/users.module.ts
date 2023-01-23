import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { FilterUsersComponent } from './filter-users/filter-users.component';
import { ViewUsersComponent } from './view-users/view-users.component';



@NgModule({
  declarations: [
    ListUsersComponent,
    FilterUsersComponent,
    ViewUsersComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ListUsersComponent]
})
export class UsersModule { }
