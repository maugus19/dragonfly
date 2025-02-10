import { create } from 'zustand';
import supabase from '../supabaseClient';
import useAuthStore from './authStore';

const useFinanceStore = create((set, get) => ({
  expenses: [],
  incomes: [],

  fetchExpenses: async () => {
    const user = useAuthStore.getState().user;
    if (!user) return;
    console.log('fetching')
    const { data, error } = await supabase
      .from('expenses')
      .select('*')
      .eq('user_id', user.id);
    if (!error) set({ expenses: data });
  },

  addExpense: async (expense) => {
    const user = useAuthStore.getState().user;
    if (!user) return;

    console.log('add expense', expense);
    const { data, error } = await supabase
      .from('expenses')
      .insert([{ ...expense, user_id: user.id }])
      .select();
    console.log(error);
    if (!error) set((state) => ({ expenses: [...state.expenses, ...data] }));
  },

  removeExpense: async (id) => {
    const user = useAuthStore.getState().user;
    if (!user) return;
    const { error } = await supabase
      .from('expenses')
      .delete()
      .eq('id', id)
      .eq('user_id', user.id);
    if (!error) set((state) => ({ expenses: state.expenses.filter((exp) => exp.id !== id) }));
  },

  fetchIncomes: async () => {
    const user = useAuthStore.getState().user;
    if (!user) return;
    const { data, error } = await supabase
      .from('incomes')
      .select('*')
      .eq('user_id', user.id);
    if (!error) set({ incomes: data });
  },

  addIncome: async (income) => {
    const user = useAuthStore.getState().user;
    if (!user) return;
    const { data, error } = await supabase
      .from('incomes')
      .insert([{ ...income, user_id: user.id }])
      .select();
    if (!error) set((state) => ({ incomes: [...state.incomes, ...data] }));
  },

  removeIncome: async (id) => {
    const user = useAuthStore.getState().user;
    if (!user) return;
    const { error } = await supabase
      .from('incomes')
      .delete()
      .eq('id', id)
      .eq('user_id', user.id);
    if (!error) set((state) => ({ incomes: state.incomes.filter((inc) => inc.id !== id) }));
  }
}));

export default useFinanceStore;