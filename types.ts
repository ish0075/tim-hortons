export interface FinancialItem {
  category: string;
  amount: number;
  details?: string;
}

export interface Tenant {
  name: string;
  annualIncome: number;
  leaseTerm: string;
  allowance?: number;
  sqFtRate?: string;
  type: 'Anchor' | 'Pad' | 'Storage';
}

export interface KeyStat {
  label: string;
  value: string;
  subtext?: string;
}

export interface ProjectImage {
  id: number;
  url: string;
  caption: string;
}