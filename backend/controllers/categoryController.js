import Category from '../models/categoryModel.js';

let CategoryController = {
    find: async (req, res) => {
        let found = await Category.find({ name: req.query.categoryName });
        res.json(found);
    },
    all: async (req, res) => {
        let all = await Category.find();
        res.json(all);
    },
    create: async (req, res) => {
        let newCategory = new Category(req.body);
        let savedCategory = newCategory.save();
        res.json(savedCategory);
    },
    edit: async (req, res) => {
        let category = await Category.findById(req.query.id);
        category.name = req.body.name;
        category.image = req.body.image;
        let editedCategory = category.save();
        res.json()
    },
    getAllProducts: async (req, res) => {
        let foundCategory = await Category.find({ name: req.query.categoryName }).populate("products");
        res.json(foundCategory);
    }
}