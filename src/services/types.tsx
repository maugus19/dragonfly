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