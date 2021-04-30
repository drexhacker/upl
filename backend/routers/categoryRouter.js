import express from 'express';
import Category from '../models/categoryModel.js'
import expressAsyncHandler from 'express-async-handler';
import { isAdmin, isAuth } from '../utils.js';
import data from '../data.js';

const categoryRouter = express.Router();

categoryRouter.post(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const newCategory = new Category({
            name: req.body.name,
            image: req.body.image,
            color: req.body.color,
        });
        newCategory.save();
        res.send({ message: 'Category Created Successfully', category: newCategory });
    })
);

categoryRouter.put(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const categoryId = req.params.id;
        const category = await Category.findById(categoryId);
        if (category) {
            category.name = req.body.name || category.name;
            category.image = req.body.image || category.image;
            category.color = req.body.color || category.color;
            req.body.products.forEach((product) => {
                category.products.push(product);
            });
            category.save();
            res.send(category);
        }
    })
)

// categoryRouter.get(
//     '/:id',
//     expressAsyncHandler(async (req, res) => {
//         const categoryId = req.params.id;
//         const category = await Category.findById(categoryId);
//         if (category) {
//             res.send(category);
//         }
//     })
// )

categoryRouter.get(
    '/',
    expressAsyncHandler(async (req, res) => {
        const categories = await Category.find().populate('products');
        res.send(categories);
    })
);


categoryRouter.get(
    '/ids',
    expressAsyncHandler(async (req, res) => {
        const cats = await Category.find();
        const ids = [];
        for (var i = 0; i < cats.length; i++) {
            ids.push({ category: cats[i]._id});
        }
        res.send(ids);
    })
);

categoryRouter.get(
    '/clear',
    expressAsyncHandler(async (req, res) => {
        const categories = await Category.find();
        categories.forEach((category) => {
            category.remove();
        })
        res.send({ message: 'Deleted' });
    })
);

categoryRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
        const categories = data.categories.map((product) => ({
            ...product,
        }));
        const createdCategories = await Category.insertMany(categories);
        res.send({ message: 'Categories Inserted Successfully', categories: createdCategories });
    })
);

export default categoryRouter;