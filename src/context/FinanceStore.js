import { create } from 'zustand';
import supabase from '../supabaseClient';
import useAuthStore from './authStore';

const useFinanceStore = create((set, get) => ({
  expenses: [],
  incomes: [],

  fetchTransactions: async (type) => {
    const user = useAuthStore.getState().user;
    if (!user) return;

    const query = supabase
      .from('transactions')
      .select('*')
      .eq('user_id', user.id);
    
    type === 'expenses' ? query.lt('amount', 0) : query.gt('amount', 0)
    

    const { data, error } = await query;
    if (!error) {
      if (type === 'expenses') {
        set({ expenses: data });
      }
      else {
        set({ incomes: data });
      }
    }
  },
  addTransaction: async (transaction, type) => {
    const user = useAuthStore.getState().user;
    if (!user) return;

    const { data, error } = await supabase
      .from('transactions')
      .insert([{ ...transaction, user_id: user.id }])
      .select();
    console.log(error);
    if (!error) {
      if (type === 'expenses') {
        set((state) => ({ expenses: [...state.expenses, ...data] }));
      }
      else {
        set((state) => ({ incomes: [...state.incomes, ...data] }));
      }
    }
  },
  removeTransaction: async(id, type) => {
    const user = useAuthStore.getState().user;
    if (!user) return;
    const { error } = await supabase
      .from('transactions')
      .delete()
      .eq('id', id)
      .eq('user_id', user.id);
      if (!error) {
        if (type === 'expenses') {
          set((state) => ({ expenses: state.expenses.filter((exp) => exp.id !== id) }))
        }
        else {
          set((state) => ({ incomes: state.incomes.filter((exp) => exp.id !== id) }))
        }
      }
  }
}));

export default useFinanceStore;