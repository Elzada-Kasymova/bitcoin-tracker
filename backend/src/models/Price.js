import mongoose from 'mongoose';

const priceSchema = new mongoose.Schema(
    {
        time: { type: Date, required: true },
        usd: { type: Number, required: true },
        eur: { type: Number, required: true },
        gbp: { type: Number, required: true },
    },
    { timestamps: true }
);

const Price = mongoose.model('Price', priceSchema);
export default Price;
