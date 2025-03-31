import express from "express";
import { getTransactions,postTransactions } from "../controllers/transaction.js";

const router = express.Router()

router.route('/gettransactions').get(getTransactions)
router.route('/posttransactions').post(postTransactions)

export default router