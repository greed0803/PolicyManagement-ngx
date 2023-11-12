import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { AuthGuard } from '../auth-guard.service';

const routes: Routes = [{
  path: '',
  canActivate: [AuthGuard],
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    //actual
    {
      path: 'user-management',
      loadChildren: () => import('./user-management/user-management.module')
        .then(m => m.UserManagementModule),
    },
    {
      path: 'policy-management',
      loadChildren: () => import('./policy-management/policy-management.module')
        .then(m => m.PolicyManagementModule),
    },
    //notfound
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
