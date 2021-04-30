import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/productModel.js';
import User from '../models/userModel.js';
import path from 'path';
import fs from 'fs';
import { getImageName, getCategoryId, isAdmin, isAuth, isSellerOrAdmin } from '../utils.js';
import excelToJson from 'convert-excel-to-json';
import Category from '../models/categoryModel.js';

const productRouter = express.Router();

productRouter.get(
  '/automation/create',
  // isAuth,
  // isSellerOrAdmin,
  expressAsyncHandler(async (req, res) => {
    var __dirname = path.resolve();
    const images = fs.readdirSync(path.join(__dirname, './frontend/public/img/prod/'));
    // const spreadsheet = fs.readFileSync(path.join(__dirname, './frontend/public/docs/UPL.xlsx'));
    // const result = excelToJson({
    //   source: fs.readFileSync(path.join(__dirname, './frontend/public/docs/UPL.xlsx'))
    // });
    // console.log(result);
    const productsData = [];
    for (var i = 0; i < images.length; i++) {
      if (images[i].startsWith("ppr")) {
        productsData.push({
          name: getImageName(0, images[i]),
          category: await getCategoryId('ppr'),
          image: '/img/prod/' + images[i],
          sizes: [
            {
              size: '',
              price: 0
            }
          ],
          countInStock: Math.floor(Math.random() * 100),
          rating: 4.5,
          numReviews: 102,
          description: '...',
        });
      } else if (images[i].startsWith("pvc")) {
        productsData.push({
          name: getImageName(0, images[i]),
          category: await getCategoryId('pvc'),
          image: '/img/prod/' + images[i],
          sizes: [
            {
              size: '',
              price: 0
            }
          ],
          countInStock: Math.floor(Math.random() * 100),
          rating: 4.5,
          numReviews: 102,
          description: '...',
        });
      } else if (images[i].startsWith("gi")) {
        productsData.push({
          name: getImageName(0, images[i]),
          category: await getCategoryId('gi'),
          image: '/img/prod/' + images[i],
          sizes: [
            {
              size: '',
              price: 0
            }
          ],
          countInStock: Math.floor(Math.random() * 100),
          rating: 4.5,
          numReviews: 102,
          description: '...',
        });
      } else if (images[i].startsWith("hdpe")) {
        productsData.push({
          name: getImageName(0, images[i]),
          category: await getCategoryId('hdpe'),
          image: '/img/prod/' + images[i],
          sizes: [
            {
              size: '',
              price: 0
            }
          ],
          countInStock: Math.floor(Math.random() * 100),
          rating: 4.5,
          numReviews: 102,
          description: '...',
        });
      } else if (images[i].startsWith("brass")) {
        productsData.push({
          name: getImageName(0, images[i]),
          category: await getCategoryId('brass'),
          image: '/img/prod/' + images[i],
          sizes: [
            {
              size: '',
              price: 0
            }
          ],
          countInStock: Math.floor(Math.random() * 100),
          rating: 4.5,
          numReviews: 102,
          description: '...',
        });
      } else if (images[i].startsWith("gentex")) {
        productsData.push({
          name: getImageName(0, images[i]),
          category: await getCategoryId('tank'),
          image: '/img/prod/' + images[i],
          sizes: [
            {
              size: '',
              price: 0
            }
          ],
          countInStock: Math.floor(Math.random() * 100),
          rating: 4.5,
          numReviews: 102,
          description: '...',
        });
      } else {
        console.error('Image category not found');
      }
    }
    // const sellerId = req.user._id;
    // const products = productsData.map((product) => ({
    //   ...product,
    //   seller: sellerId
    // }));
    // const createdProducts = await Product.insertMany(products);
    res.send(productsData);
  })
);


productRouter.get(
  '/automate',
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    if (products.length === 0) {
      res.status(404).send({message: 'No Products Found'});
    } else {
      products.forEach((product, index) => {
        products[index].images[0] = product.image;
        product.save();
      });
      res.send({message: 'Successfully', products});
    }
  })
);

productRouter.get(
  '/automate/remove',
  expressAsyncHandler(async (req, res) => {
    const category = req.query.category || "all";
    const categoryFilter = category ? { category } : {};
    const products = await Product.find();
    if (products.length === 0) {
      res.status(404).send({message: 'No Products Found'});
    } else {
      products.forEach((product, index) => {
        product.remove();
        console.log('Products Removed');
      });
      
      res.send({message: 'Successfully removed', products});
    }
    res.send({message: 'Noone'});
  })
);

productRouter.get(
  '/ids',
  expressAsyncHandler(async (req, res) => {
      const products = await Product.find();
      const ids = [];
      for (var i = 0; i < products.length; i++) {
          ids.push({ id: products[i]._id});
      }
      res.send(ids);
  })
);


productRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const pageSize = Number(req.query.pagesize) || 100;
    const page = Number(req.query.pageNumber) || 1;
    const name = req.query.name || '';
    const category = req.query.category || '';
    const seller = req.query.seller || '';
    const order = req.query.order || '';
    const min =
      req.query.min && Number(req.query.min) !== 0 ? Number(req.query.min) : 0;
    const max =
      req.query.max && Number(req.query.max) !== 0 ? Number(req.query.max) : 0;
    const rating = req.query.rating && Number(req.query.rating) !== 0
        ? Number(req.query.rating) : 0;
    const numReviews = req.query.numReviews && Number(req.query.numReviews) !== 0
        ? Number(req.query.numReviews) : 0;

    const nameFilter = name ? { name: { $regex: name, $options: 'i' } } : {};
    const sellerFilter = seller ? { seller } : {};
    const categoryFilter = category ? { category } : {};
    const priceFilter = min && max ? { price: { $gte: min, $lte: max } } : {};
    const ratingFilter = rating ? { rating: { $gte: rating } } : {};
    const popularFilter = numReviews ? { numReviews: { $gte: numReviews } } : {};
    const sortOrder =
      order === 'lowest'
        ? { price: 1 }
        : order === 'highest'
        ? { price: -1 }
        : order === 'toprated'
        ? { rating: -1 }
        : order === 'popular'
        ? { numReviews: -1 }
        : { _id: -1 };
    const count = await Product.count({
      ...sellerFilter,
      ...nameFilter,
      ...categoryFilter,
      ...priceFilter,
      ...ratingFilter,
      ...popularFilter,
    });
    const products = await Product.find({
      ...sellerFilter,
      ...nameFilter,
      ...categoryFilter,
      ...priceFilter,
      ...ratingFilter,
      ...popularFilter,
    })
      .populate('seller', 'seller.name seller.logo')
      .populate('category')
      .sort(sortOrder)
      .skip(pageSize * (page - 1))
      .limit(pageSize);
    res.send({ products, page, pages: Math.ceil(count / pageSize) });
  })
);

productRouter.get(
  '/categories',
  expressAsyncHandler(async (req, res) => {
    const categories = await Product.find().distinct('category').populate('category');
    res.send(categories);
  })
);

productRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    // await Product.remove({});
    const seller = await User.findOne({ email: "sales@uniqueplumbersug.com" });
    if (seller) {
      console.log(seller.name);
      const products = data.products.map((product) => ({
        ...product,
        seller: seller._id,
      }));
      const createdProducts = await Product.insertMany(products);
      res.send({ createdProducts });
    } else {
      res
        .status(500)
        .send({ message: 'No seller found. first run /api/users/seed' });
    }
  })
);

productRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id).populate(
      'seller',
      'seller.name seller.logo seller.rating seller.numReviews'
    ).populate('category');
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);

productRouter.post(
  '/',
  isAuth,
  isSellerOrAdmin,
  expressAsyncHandler(async (req, res) => {
    const category = await Category.findOne();
    const product = new Product({
      name: 'sample name ' + Math.floor(Math.random() * 10),
      seller: req.user._id,
      image: '/img/noimage.jpg',
      sizes: [
        {
          "size": "sample size",
          "price": 1000
        }
      ],
      category: category._id,
      countInStock: 0,
      rating: 0,
      numReviews: 0,
      description: 'sample description',
    });
    const createdProduct = await product.save();
    res.send({ message: 'Product Created', product: createdProduct });
  })
);
productRouter.put(
  '/:id',
  isAuth,
  isSellerOrAdmin,
  expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
      product.name = req.body.name || product.name;
      product.price = req.body.price || product.price;
      product.image = req.body.image || product.image;
      product.sizes = req.body.sizes || product.sizes;
      product.category = req.body.category || product.category;
      product.countInStock = req.body.countInStock || product.countInStock;
      product.description = req.body.description || product.description;
      const updatedProduct = await product.save();
      res.send({ message: 'Product Updated', product: updatedProduct });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);

productRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      const deleteProduct = await product.remove();
      res.send({ message: 'Product Deleted', product: deleteProduct });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);


productRouter.post(
  '/:id/reviews',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
      if (product.reviews.find((x) => x.name === req.user.name)) {
        return res
          .status(400)
          .send({ message: 'You already submitted a review' });
      }
      const review = {
        name: req.user.name,
        rating: Number(req.body.rating),
        comment: req.body.comment,
      };
      product.reviews.push(review);
      product.numReviews = product.reviews.length;
      product.rating =
        product.reviews.reduce((a, c) => c.rating + a, 0) /
        product.reviews.length;
      const updatedProduct = await product.save();
      res.status(201).send({
        message: 'Review Created',
        review: updatedProduct.reviews[updatedProduct.reviews.length - 1],
      });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);

export default productRouter;
