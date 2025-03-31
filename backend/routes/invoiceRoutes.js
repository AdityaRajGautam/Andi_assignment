import express from "express";

const router = express.Router()

router.route('/getInvoice').get(getStocks)
router.route('/poststocks').post(postStocks)

export default router