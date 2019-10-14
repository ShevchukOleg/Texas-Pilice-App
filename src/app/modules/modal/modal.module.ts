import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserModalComponent } from './components/new-user-modal/new-user-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [NewUserModalComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule, FormsModule
  ],
  exports: [NewUserModalComponent],
  entryComponents: [NewUserModalComponent]
})
export class ModalModule { }
