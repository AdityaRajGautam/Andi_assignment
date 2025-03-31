import React from "react";
import { useLocation } from "react-router-dom";
import logo from '../assets/logo.jpg';

const Invoice = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const vendor = params.get("vendor") || "N/A";
  const type = params.get("type") || "N/A";
  const amount = params.get("amount") || "0";
  const quantity = params.get("quantity") || "1";
  const total = Number(amount) * Number(quantity);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold text-center">Invoice Generation</h2>
      <div className="bg-white p-6 rounded-lg shadow-md w-2/3 mx-auto mt-4 border relative">
        <img src={logo} alt="Company Logo" className="absolute top-4 left-4 w-16" />
        <h3 className="text-xl font-semibold text-center">Invoice</h3>
        <p className="text-sm text-gray-600 text-center">ANDI Software Solutions</p>
        <div className="border-t mt-4 pt-4">
          <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
          <p><strong>Vendor:</strong> {vendor}</p>
          <p><strong>Type:</strong> {type}</p>
        </div>
        <table className="w-full mt-4 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Item</th>
              <th className="border border-gray-300 p-2">Qty</th>
              <th className="border border-gray-300 p-2">Price</th>
              <th className="border border-gray-300 p-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">{vendor}</td>
              <td className="border border-gray-300 p-2">{quantity}</td>
              <td className="border border-gray-300 p-2">Rs.{amount}</td>
              <td className="border border-gray-300 p-2">Rs.{total}</td>
            </tr>
          </tbody>
        </table>
        <p className="text-right mt-4 text-lg font-bold">Total: Rs.{total}</p>
      </div>
    </div>
  );
};

export default Invoice;
