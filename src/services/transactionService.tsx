import {createServerComponentClient} from '@supabase/auth-helpers-nextjs';
import {cookies} from 'next/headers';

import {cache} from 'react';
import { Account } from './types';

export const createServerClient = cache(() => {
  const cookieStore = cookies();
  return createServerComponentClient<any>({
    cookies: () => cookieStore
  });
});

export async function getList() {
  const supabase = createServerClient();
  const {data: accounts} = await supabase
    .from('accounts')
    .select('*');
  return accounts;
}

export async function getById(id: string | null) {
  const supabase = createServerComponentClient({cookies});
  const {data: queries} = await supabase.from('accounts')
    .select()
    .eq('id', id);
  return queries![0];
}

export async function saveAccount(account: Account) {
  const supabase = createServerComponentClient({cookies});
  const {data, error} = await supabase
    .from('accounts')
    .insert([
      {
        ...account
      }
    ])
    .select();
  return data;
}
