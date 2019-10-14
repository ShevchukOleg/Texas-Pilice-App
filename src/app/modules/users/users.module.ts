import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUserInfoComponent } from './components/all-user-info/all-user-info.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { UsersRoutingModule } from './users-routing.module';
import { ConvertDatePipe } from '../../pipes/convert-date.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ModalModule } from '../modal/modal.module';

@NgModule({
  declarations: [AllUserInfoComponent, SingleUserComponent, ConvertDatePipe],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatDialogModule,
    MatButtonModule,
    ModalModule
  ]
})
export class UsersModule { }
