import express from 'express';
import { getCurrentPrice, getHistoricalPrices } from '../controllers/priceController.js';

const router = express.Router();

router.get('/current', getCurrentPrice);
router.get('/history', getHistoricalPrices); 

export default router;
