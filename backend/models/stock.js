import mongoose from "mongoose";

const StockSchema = new mongoose.Schema({
    vendor:{
        type:String,
        required:true,
    },
    type: {
        type:String,
        required:true
    },
    amount: {
        type:Number,
        required:true,
    },
    quantity:{
        type:Number,
        required:true
    },
    total:{
        type:Number
    },
    date: { type: Date, default: Date.now },
    
})

export default mongoose.model('Stock',StockSchema)