import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { PolicyService } from '../../../@core/service/policies.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.scss'],
})
export class PolicyListComponent {

  settings = {
    columns: {
      policy_id: {
        title: 'Policy Number',
        type: 'string',
        editable: false,
      },
      user_id: {
        title: 'User ID',
        type: 'string',
        editable: false,
      },
      holder_name: {
        title: 'Holder Name',
        type: 'string',
      },
      coverage_type: {
        title: 'Coverage Type',
        type: 'string',
      },
      premium_amount: {
        title: 'Premium Amount',
        type: 'number',
        editable: false,
      },
      start_date: {
        title: 'Policy Coverage Start Date',
        type: 'Date',
        editable: false,
      },
      end_date: {
        title: 'Policy Expire Date',
        type: 'Date',
        editable: false,
      },
    },
    actions: false,
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: PolicyService) {
    const data = this.service.getPolicies();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
