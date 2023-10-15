import {createServerComponentClient} from '@supabase/auth-helpers-nextjs';
import {cookies} from 'next/headers';

import {cache} from 'react';

export const createServerClient = cache(() => {
  const cookieStore = cookies();
  return createServerComponentClient<any>({
    cookies: () => cookieStore
  });
});

export async function getList() {
  const supabase = createServerClient();
  const {data: queries} = await supabase
    .from('queries')
    .select('*')
    .eq('is_plus', false);
  return queries;
}

export async function getById(id: string | null) {
  const supabase = createServerComponentClient({cookies});
  const {data: queries} = await supabase.from('queries')
    .select()
    .eq('public_id', id)
    .eq('is_plus', false);
  return queries![0];
}

export async function storeQuery(queryObject: QueryObject) {
  const supabase = createServerComponentClient({cookies});
  const {data, error} = await supabase
    .from('queries')
    .insert([
      {
        query: queryObject.query,
        public_id: queryObject.public_id,
        is_plus: false,
        user_id: null
      }
    ])
    .select();
  return data;
}

export async function executeQuery(json: any, query: string) {
  return _normalizeResult(search(json, query));
}

async function _normalizeResult(result: any) {
  if (typeof result === 'string' || Array.isArray(result) || Object.keys(result).length > 0) {
    return result;
  }

  return result.toString();
}