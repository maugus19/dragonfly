import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Income from "./pages/Income";
import Login from "./pages/Login";
import {CustomNavBar} from "./components/CustomNavBar";
import useAuthStore from "./context/authStore";
import useFinanceStore from "./context/FinanceStore";

function PrivateRoute({ children }) {
  const user = useAuthStore((state) => state.user);
  return user ? children : <Navigate to="/login" replace />;
}

function App() {

  const { user, checkUser } = useAuthStore();
  const { fetchTransactions } = useFinanceStore();

  useEffect(() => {
    checkUser(); // Verifica si hay un usuario autenticado
  }, []);

  useEffect(() => {
    if (user) {
      fetchTransactions('expenses');
      fetchTransactions('incomes');
    }
  }, [user]);
  return (
    <>
      <CustomNavBar />
      <br />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/reports" element={<PrivateRoute><Reports /></PrivateRoute>} />
        <Route path="/income" element={<PrivateRoute><Income /></PrivateRoute>} />
      </Routes>
    </>
  );
}

export default App;