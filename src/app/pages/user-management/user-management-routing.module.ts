import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserManagementComponent } from './user-management.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddUpdateComponent } from './user-add-update/user-add-update.component';

const routes: Routes = [{
  path: '',
  component: UserManagementComponent,
  children: [
    {
      path: 'user-list',
      component: UserListComponent,
    },
    {
      path: 'user-add-update',
      component: UserAddUpdateComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserManagementRoutingModule { }

export const routedComponents = [
  UserManagementComponent,
  UserListComponent,
  UserAddUpdateComponent,
];
