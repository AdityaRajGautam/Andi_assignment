import mongoose from "mongoose";

const InvoiceSchema = new mongoose.Schema({
    customerName: String,
    date: String,
    items: [
      {
        itemName: String,
        quantity: Number,
        price: Number,
        total: Number,
      }
    ],
    totalAmount: Number,
  });
export default mongoose.model('Invoice', InvoiceSchema);