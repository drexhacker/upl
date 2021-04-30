import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        image: { type: String, required: true },
        color: { type: String, required: true, default:'blue' },
        products: [
            { 
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product'
            }
        ]
    },
    {
        timestamps: true,
    }
);

const Category = mongoose.model('Category', categorySchema);
export default Category;