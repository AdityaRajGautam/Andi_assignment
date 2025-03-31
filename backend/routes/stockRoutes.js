import express from "express";
import { getStocks,postStocks } from "../controllers/stocks.js";

const router = express.Router()

router.route('/getstock').get(getStocks)
router.route('/poststocks').post(postStocks)

export default router