import supabase from '../supabaseClient';
import useAuthStore from './authStore';

export async function getTypes() {
  let { data } = await supabase.rpc('get_types', { enum_type: 'transaction_category'  })
  return data;
}