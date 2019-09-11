import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUserInfoComponent } from './components/all-user-info/all-user-info.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { UsersRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [AllUserInfoComponent, SingleUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
