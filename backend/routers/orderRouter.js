import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import { isAdmin, isAuth, isSellerOrAdmin } from '../utils.js';
import Flutterwave from 'flutterwave-node-v3';
import Product from '../models/productModel.js';
import nodemailer from 'nodemailer';
let fs = require("fs");
let ejs = require("ejs");
let pdf = require("html-pdf");
let path = require("path");


// const Flutterwave = require('flutterwave-node-v3');

const orderRouter = express.Router();
orderRouter.get(
  '/',
  isAuth,
  isSellerOrAdmin,
  expressAsyncHandler(async (req, res) => {
    const seller = req.query.seller || '';
    const sellerFilter = seller ? { seller } : {};

    const orders = await Order.find({ ...sellerFilter }).populate(
      'user',
      'name'
    );
    res.send(orders);
  })
);
orderRouter.get(
  '/mine',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.send(orders);
  })
);

orderRouter.post(
  '/:id/payment/airtel',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    // const { data } = await Axios.get('/api/config/flutterwave');
    const flw = new Flutterwave(process.env.FLUTTERWAVE_PUB_KEY, process.env.FLUTTERWAVE_SEC_KEY);

    try {

      const payload = {
        "tx_ref": "MC-" + req.params.id + "-X",
        "amount": Math.round(req.body.order.totalPrice),
        "email": req.user.email,
        "phone_number": req.body.mobileNumber,
        "currency": "UGX",
        "fullname": req.body.order.shippingAddress.fullName,
        "redirect_url": req.protocol === "https" ? "https://uniqueplumbersug.com/order/" + req.params.id : "http://localhost:3000/order/" + req.params.id,
        "network": "Airtel"
        // "enc_key": data.encKey
      }

      const response = await flw.MobileMoney.uganda(payload)
      console.log(response);
      console.log(Math.round(req.body.order.totalPrice));
      // window.location.href = response.meta.authorization.redirect;
      res.send(response);
    } catch (error) {
      console.log(error)
      res.status(500).send(error);
    }

  })
);


orderRouter.post(
  '/:id/payment/mtn',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    // const { data } = await Axios.get('/api/config/flutterwave');
    const flw = new Flutterwave(process.env.FLUTTERWAVE_PUB_KEY, process.env.FLUTTERWAVE_SEC_KEY);

    try {

      const payload = {
        "tx_ref": "MC-" + req.params.id + "-X",
        "amount": Math.round(req.body.order.totalPrice),
        "email": req.user.email,
        "phone_number": req.body.mobileNumber,
        "currency": "UGX",
        "fullname": req.body.order.shippingAddress.fullName,
        "redirect_url": req.protocol === "https" ? "https://uniqueplumbersug.com/order/" + req.params.id : "http://localhost:3000/order/" + req.params.id,
        "network": "MTN"
        // "enc_key": data.encKey
      }

      const response = await flw.MobileMoney.uganda(payload)
      // console.log(response);
      res.send(response);

    } catch (error) {
      console.log(error)
      res.status(500).send(error);
    }

  })
);

orderRouter.get(
  ':id/payment/verify',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    try {
      const payload = { "id": req.data.paymentId }
      const response = await flw.Transaction.verify(payload)
      // console.log(response);
      res.send(response);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  })
);

orderRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    if (req.body.orderItems.length === 0) {
      res.status(400).send({ message: 'Cart is empty' });
    } else {
      for (var i = 0; i < req.body.orderItems.length; i++) {
        const productItem = await Product.findById(req.body.orderItems[i].product);
        if (productItem) {
          productItem.name = productItem.name;
          productItem.size = productItem.size;
          productItem.image = productItem.image;
          productItem.brand = productItem.brand;
          productItem.category = productItem.category;
          productItem.description = productItem.description;
          productItem.countInStock = productItem.countInStock - req.body.orderItems[i].qty;
          const productQty = await productItem.save();
          console.log(productQty);
        }
      }
      const order = new Order({
        seller: req.body.orderItems[0].seller,
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        shippingPrice: req.body.shippingPrice,
        taxPrice: req.body.taxPrice,
        totalPrice: req.body.totalPrice,
        user: req.user._id,
      });
      const createdOrder = await order.save();
      res.send({ message: 'Order Placed Successfully', order: createdOrder });
    }
  })
);

orderRouter.get(
  '/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
  })
);

orderRouter.put(
  '/:id/pay',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email_address,
      };
      const updatedOrder = await order.save();
      const invoiceId = Math.floor(Math.random() * 100000);
      var __dirname = path.resolve();
      ejs.renderFile(path.join(__dirname, './views/', "invoice-template.ejs"), { order: updatedOrder, invoiceId: invoiceId, number: '256703777625' }, (err, data) => {
        if (err) {
          res.send(err);
        } else {
          let options = {
            "format": "A4",
          };
          pdf.create(data, options).toFile("frontend/temps/Invoice" + createdOrder._id + ".pdf", async (err, data) => {
            if (err) {
              res.status(500).send(err);
            } else {
              try {
                const transporter = nodemailer.createTransport({
                  host: "mail.drexsoft.xyz",
                  port: 587,
                  secure: false,
                  auth: {
                    user: "upl@drexsoft.xyz",
                    pass: "Password@2020"
                  },
                });
                const generatedForm = "https://uniqueplumbersug.com/api/files/Invoice" + updatedOrder._id + ".pdf";
                const bodyMessage = 'Hello ' + req.user.name + ',\nCongratulations, Your Order has been placed successfully. An email has been sent to containing your invoice, download it and use it order tracking and order pickup. \n Thank You for using Our services!\n\nRegards Unique Plumbers Team';
                const info = await transporter.sendMail({
                  from: '"UNIQUE PLUMBERS UGANDA LTD" <upl@drexsoft.xyz>', // sender address
                  to: "admin@drexsoft.xyz, uniqueplumbersug@gmail.com, " + req.user.email, // list of receivers
                  subject: "UNIQUE PLUMBERS' INVOICE", // Subject line
                  text: bodyMessage, // html body
                  attachments: [
                    {
                      path: generatedForm,
                      filename: 'YourInvoice.pdf'
                    }
                  ]
                });
                res.send({ message: "Invoice Sent Successfully", link: generatedForm, info, order: updatedOrder });
              } catch (error) {
                res.status(500).send(error);
              }
            }
          });
        }
      });
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
  })
);

orderRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      const deleteOrder = await order.remove();
      res.send({ message: 'Order Deleted', order: deleteOrder });
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
  })
);

orderRouter.put(
  '/:id/deliver',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.isDelivered = true;
      order.deliveredAt = Date.now();

      const updatedOrder = await order.save();
      res.send({ message: 'Order Delivered', order: updatedOrder });
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
  })
);

export default orderRouter;
