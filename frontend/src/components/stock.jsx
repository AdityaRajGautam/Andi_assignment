import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Stock = () => {
  const [stock, setStock] = useState([]);
  const [vendor, setVendor] = useState("");
  const [type, setType] = useState("purchase");
  const [quantity,setQuantity] = useState();
  const [amount, setAmount] = useState();

  const handleAddStock = async () => {
    const newStock = { vendor, type, amount: Number(amount), quantity: Number(quantity) };

    try {
        const response = await fetch("http://localhost:8080/api/v1/stock/poststocks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newStock),
        });

        if (!response.ok) {
            throw new Error("Failed to add stock");
        }

        const data = await response.json();
        console.log(data);
        setStock([...stock, data]);
    } catch (error) {
        console.error("Error adding stock:", error);
    }

    setVendor("");
    setType("purchase");
    setAmount("");
    setQuantity("");
};


  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Stock Management</h2>
      <div className="mt-4">
        <input
          className="border p-2 mr-2"
          type="text"
          placeholder="Vendor Name"
          value={vendor}
          onChange={(e) => setVendor(e.target.value)}
        />
        <select
          className="border p-2 mr-2"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="purchase">Purchase</option>
          <option value="sale">Sale</option>
        </select>
        <input
          className="border p-2 mr-2"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          className="border p-2 mr-2"
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-2" onClick={handleAddStock}>
          Add
        </button>
      </div>
      <ul className="mt-4">
        {stock.map((entry, index) => (
          <li key={index} className="p-2 border-b">
            <div className="flex items-center gap-4 p-2">
              <div className=" flex  items-center gap-4 p-2 flex-2/3">
                <div>{entry.vendor}</div>
                <div>{entry.type}</div>
                <div>Rs.{entry.amount}</div>
                <div>{entry.quantity}</div>
              </div>
              <div className="flex-1/3">
                <button className="bg-blue-500 text-white p-2 rounded">
                <Link to={`/invoice?vendor=${entry.vendor}&type=${entry.type}&amount=${entry.amount}&quantity=${entry.quantity}`}>
  Invoice
</Link>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stock;
