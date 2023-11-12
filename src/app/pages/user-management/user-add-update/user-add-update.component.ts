import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'ngx-form-inputs',
  templateUrl: './user-add-update.component.html',
  styleUrls: ['./user-add-update.component.scss'],
})
export class UserAddUpdateComponent {

  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';
  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];

  constructor(private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
         console.log(params['user_id']);
     });
 }
}
