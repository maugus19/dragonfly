import {createServerComponentClient} from '@supabase/auth-helpers-nextjs';
import {cookies} from 'next/headers';
import {cache} from 'react';
import { Transaction } from './types';

export const createServerClient = cache(() => {
  const cookieStore = cookies();
  return createServerComponentClient<any>({
    cookies: () => cookieStore
  });
});

export async function getListByAccount(accountId: string| number) {
  const supabase = createServerClient();
  const {data: transactions} = await supabase
    .from('transactions')
    .select()
    .eq('account', accountId);
  return transactions;
}

export async function getById(id: string | null) {
  const supabase = createServerComponentClient({cookies});
  const {data: queries} = await supabase.from('transactions')
    .select()
    .eq('id', id);
  return queries![0];
}

export async function saveAccount(transaction: Transaction) {
  const supabase = createServerComponentClient({cookies});
  const {data, error} = await supabase
    .from('transactions')
    .insert([
      {
        ...transaction
      }
    ])
    .select();
  return data;
}
