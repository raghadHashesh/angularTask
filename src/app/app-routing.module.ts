import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserInfoComponent},
  { path: '**', component: UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
