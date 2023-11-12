import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolicyManagementComponent } from './policy-management.component';
import { PolicyListComponent } from './policy-list/policy-list.component';
import { PolicyAddUpdateComponent } from './policy-add-update/policy-add-update.component';

const routes: Routes = [{
  path: '',
  component: PolicyManagementComponent,
  children: [
    {
      path: 'policy-list',
      component: PolicyListComponent,
    },
    {
      path: 'policy-add-update',
      component: PolicyAddUpdateComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolicyManagementRoutingModule { }

export const routedComponents = [
  PolicyManagementComponent,
  PolicyListComponent,
  PolicyAddUpdateComponent,
];
