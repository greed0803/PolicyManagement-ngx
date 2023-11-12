import { Injectable } from '@angular/core';
import { Policy, PolicyData} from '../data/policies';

@Injectable({providedIn:"root"})
export class PolicyService extends PolicyData {

    private data: Policy[] = [
        {
          "policy_id": "POL001",
          "user_id": "USER001",
          "holder_name": "John Doe",
          "coverage_type": "Auto",
          "premium_amount": 1200.00,
          "start_date": new Date("2023-01-15"),
          "end_date": new Date("2024-01-15")
        },
        {
          "policy_id": "POL002",
          "user_id": "USER002",
          "holder_name": "Jane Smith",
          "coverage_type": "Home",
          "premium_amount": 800.00,
          "start_date": new Date("2023-02-01"),
          "end_date": new Date("2024-02-01")
        },
        {
          "policy_id": "POL200",
          "user_id": "USER010",
          "holder_name": "Robert Johnson",
          "coverage_type": "Health",
          "premium_amount": 1500.00,
          "start_date": new Date("2023-11-01"),
          "end_date": new Date("2024-11-01")
        }
      ];
    
    getPoliciesByUserId(user_id: string): Policy[] {
        return this.data.filter(policy => policy.user_id === user_id);
    }
    getPolicies(): Policy[] {
        return this.data;
    } 

}