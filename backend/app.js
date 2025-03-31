import express from "express";
import cors from "cors";
import stockRoutes from './routes/stockRoutes.js'
import transactionRoutes from './routes/transactionRoutes.js'

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use('/api/v1/stock',stockRoutes)
app.use('/api/v1/transaction',transactionRoutes)

app.get("/", (req, res) => {
  res.send("<h1>Welecome to exprense tracker </h1>");
});

export default app;
