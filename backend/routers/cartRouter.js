import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Cart from '../models/cartModel.js';
import { containsObjectIndex, isAuth } from '../utils.js';

const cartRouter = express.Router();

cartRouter.get(
    '/',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        const user = req.user || '';
        const cart = await Cart.find({ user: user._id });
        res.send(cart);
    })
);

cartRouter.post(
    '/',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        const user = req.user || '';
        const newCart = new Cart({
            cartItems: [],
            itemsPrice: 0,
            user: user
        });
        newCart.save();
        res.send({ message: "Cart Created", cart: newCart });
    })
);

cartRouter.put(
    '/',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        const user = req.user;
        const cart = await Cart.findOne({ user: user._id });

        if (cart) {
            req.body.cartItems.forEach(cartItem => {
                if (containsObjectIndex(cartItem, cart.cartItems) === -1) {
                    console.log('New one');
                    cart.cartItems.push(cartItem);
                    cart.itemsPrice += cartItem.price;
                } else {
                    console.log('Exists in Cart');
                    var itemIndex = containsObjectIndex(cartItem, cart.cartItems);
                    cart.cartItems[itemIndex].qty += cartItem.qty;
                    cart.itemsPrice += cartItem.price;
                }
            });
            cart.save();
            res.send({ message: 'Cart Updated', cart: cart });
        }
    })
);

cartRouter.put(
    '/remove',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        const user = req.user;
        const cart = await Cart.findOne({ user: user._id });
        const cartItem = req.body;

        if (cart) {
            if (containsObjectIndex(cartItem, cart.cartItems) === -1) {
                console.log('New one');
                res.status(404).send({message: 'Item not in Cart'});
            } else {
                console.log('Exists in Cart');
                var itemIndex = containsObjectIndex(cartItem, cart.cartItems);
                cart.itemsPrice -= cartItem.price * cartItem.qty;
                cart.cartItems.splice(itemIndex, 1);
                cart.save();
                res.send({ message: 'Item removed successfully', cart: cart });
            }
        }
    })
);

cartRouter.delete(
    '/',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        const cart = await Cart.findOne({ user: req.user._id });
        cart.deleteOne();
        res.send({ message: 'Deleted' });
    })
);

export default cartRouter;