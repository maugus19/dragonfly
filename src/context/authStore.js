import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import supabase from '../supabaseClient';

const useAuthStore = create(persist(
  (set) => ({
    user: null,

    login: async (email, password) => {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (!error) set({ user: data.user });
      return error;
    },

    signup: async (email, password) => {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (!error) set({ user: data.user });
      return error;
    },

    logout: async () => {
      await supabase.auth.signOut();
      set({ user: null });
    },

    checkUser: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      set({ user });
    }
  }),
  {
    name: 'auth-storage',
    getStorage: () => localStorage,
  }
));

export default useAuthStore;