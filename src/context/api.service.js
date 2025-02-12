import supabase from '../supabaseClient';

export async function getCategories() {
  let { data } = await supabase.rpc('get_types', { enum_type: 'transaction_category'  })
  return data;
}