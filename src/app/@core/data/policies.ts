export interface Policy {
  policy_id: string;
  user_id: string;
  holder_name: string;
  coverage_type: string;
  premium_amount: number;
  start_date: Date;
  end_date: Date;
}

export abstract class PolicyData {
  abstract getPolicies():  Policy[];
  abstract getPoliciesByUserId(user_id: string): Policy[];
}
