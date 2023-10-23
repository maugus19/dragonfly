export type Account = {
  id?: number,
  name: string,
  amount: number,
  user: number,
  created_at?: Date
}

export type Transaction = {
  id?: number,
  created_at?: Date,
  amount: number,
  type: string,
  source: string,
  description?: string,
  status?: string
}

export interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right' | 'left';
  format?: (value: number) => string;
}

export type CustomObject = {[key: string]: any};