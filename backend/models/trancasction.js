import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
    category: {
        type:String,
        required:true,
    },
    type: {
        type:String,
        Required:true,
    },
    amount: {
        type:Number,
        required:true
    },
    date: { type: Date, default: Date.now },
  });
  export default mongoose.model('Transaction', TransactionSchema);