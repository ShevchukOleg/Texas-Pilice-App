import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUserInfoComponent } from './components/all-user-info/all-user-info.component';
import { SingleUserComponent } from './components/single-user/single-user.component';

const routes: Routes = [
  {path: 'users', component: AllUserInfoComponent},
  {path: 'user/:id', component: SingleUserComponent},
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: '**', redirectTo: 'users', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsersRoutingModule { }
