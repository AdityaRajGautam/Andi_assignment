import Transaction from "../models/trancasction.js";

export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 });
    res.send(transactions);
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).send({ error: "Error fetching transactions" });
  }
};

export const postTransactions = async (req, res) => {
  try {
    const { category, type, amount } = req.body;
    
    if (!category || !type || !amount) {
      return res.status(400).send({ error: "All fields are required" });
    }

    const transaction = new Transaction({ category, type, amount, date: new Date() });
    await transaction.save();

    res.status(201).send(transaction);
  } catch (error) {
    console.error("Error adding transaction:", error);
    res.status(500).send({ error: "Error adding transaction" });
  }
};
