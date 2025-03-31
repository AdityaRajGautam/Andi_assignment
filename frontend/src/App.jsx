import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Stock from "./components/stock";
import IncomeExpense from "./components/incomeExpense";
import Invoice from "./components/invoice";
import Navbar from "./components/common/navbar";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Navbar />
      <Routes>
        <Route path="/stock" element={<Stock />} />
        <Route path="/income-expense" element={<IncomeExpense />} />
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
    </div>
  );
}

export default App;
