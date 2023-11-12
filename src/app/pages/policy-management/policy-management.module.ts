import { NgModule } from '@angular/core';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbRadioModule, NbSelectModule, NbTreeGridModule, NbUserModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import {PolicyManagementRoutingModule, routedComponents } from './policy-management-routing.module';
// import { FormsRoutingModule } from '../forms/forms-routing.module';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    PolicyManagementRoutingModule,
    Ng2SmartTableModule,    
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    // FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class PolicyManagementModule { }
