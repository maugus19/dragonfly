import { create } from 'zustand';

const useExpenseStore = create((set) => {
  const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
  const storedIncomes = JSON.parse(localStorage.getItem('incomes')) || [];

  return {
    expenses: storedExpenses,
    incomes: storedIncomes,
    addExpense: (expense) => set((state) => {
      const updatedExpenses = [...state.expenses, expense];
      localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
      return { expenses: updatedExpenses };
    }),
    addIncome: (income) => set((state) => {
      const updatedIncomes = [...state.incomes, income];
      localStorage.setItem('incomes', JSON.stringify(updatedIncomes));
      return { incomes: updatedIncomes };
    })
  };
});

export default useExpenseStore;