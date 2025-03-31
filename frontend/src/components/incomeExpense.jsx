import React, { useState, useEffect } from "react";

const IncomeExpense = () => {
  const [transactions, setTransactions] = useState([]);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('income');
  const [amount, setAmount] = useState('');

  // Fetch transactions from backend on component mount
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/v1/transaction/gettransactions");
        if (!response.ok) throw new Error("Failed to fetch transactions");

        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  const handleAddTransaction = async () => {
    const newTransaction = { category, type, amount: Number(amount) };

    try {
      const response = await fetch("http://localhost:8080/api/v1/transaction/posttransactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTransaction),
      });

      if (!response.ok) {
        throw new Error("Failed to add transaction");
      }

      const data = await response.json();
      setTransactions([...transactions, data]);
    } catch (error) {
      console.error("Error adding transaction:", error);
    }

    setCategory('');
    setType('income');
    setAmount('');
  };

  const handleDeleteTransaction = (index) => {
    const updatedTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(updatedTransactions);
  };

  const total = transactions.reduce(
    (acc, curr) => curr.type === 'income' ? acc + Number(curr.amount) : acc - Number(curr.amount), 0
  );

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Income & Expense Management</h2>
      <div className="mt-4">
        <input className="border p-2 mr-2" type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
        <select className="border p-2 mr-2" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input className="border p-2 mr-2" type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button className="bg-blue-500 text-white p-2" onClick={handleAddTransaction}>Add</button>
      </div>
      <ul className="mt-4">
        {transactions.map((entry, index) => (
          <li key={index} className="p-2 border-b flex justify-between items-center">
            <span>{entry.category} - {entry.type} - Rs.{entry.amount}</span>
            <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDeleteTransaction(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-bold mt-4">Net {total >= 0 ? 'Profit' : 'Loss'}: Rs.{Math.abs(total)}</h3>
    </div>
  );
};

export default IncomeExpense;
