import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    
      <nav className="bg-white p-4 shadow-md rounded-lg flex justify-between">
        <h1 className="text-xl font-bold">Finance Manager</h1>
        <div className="space-x-4">
          <Link to="/stock" className="text-blue-500">
            Stock
          </Link>
          <Link to="/income-expense" className="text-blue-500">
            Income & Expense
          </Link>
        </div>
      </nav>
  );
};

export default Navbar;
