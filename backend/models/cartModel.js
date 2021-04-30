import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema(
    {
        cartItems: [
            {
                name: { type: String, required: true },
                qty: { type: Number, required: true },
                image: { type: String, required: true },
                price: { type: Number, required: true },
                product: {
                  type: mongoose.Schema.Types.ObjectId,
                  ref: 'Product',
                  required: true,
                },
            },
        ],
        itemsPrice: { type: Number, required: true },
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    },
    {
      timestamps: true,
    }
);
const Cart = mongoose.model('Cart', cartSchema);
export default Cart;