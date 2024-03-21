import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersFormComponent } from './users-forms/users-form.component';
import { ListUsersComponent } from './users-list/users.component';

@NgModule({
  declarations: [ListUsersComponent, UsersFormComponent],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
