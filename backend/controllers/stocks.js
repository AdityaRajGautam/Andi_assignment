import Stock from "../models/stock.js";

export const getStocks = async (req, res) => {
  try {
    const { vendor, type } = req.query;
    let query = {};
    if (vendor) query.vendor = vendor;
    if (type) query.type = type;

    const stock = await Stock.find(query).sort({ dateAdded: -1 });
    res.send(stock);
  } catch (error) {
    res.status(500).send({ error: "Error fetching stock" });
    console.log(error);
  }
};

export const postStocks = async (req, res) => {
  try {
    const { vendor, type, amount,quantity } = req.body;
    const total = amount*quantity
    const stock = new Stock({ vendor, type, amount,quantity,total});
    await stock.save();
    res.status(201).send(stock);
  } catch (error) {
    res.status(500).send({ error: "Error adding stock" });
    console.log(error);
  }
};
