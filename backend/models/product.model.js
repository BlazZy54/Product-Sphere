import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {timestamps: true}) //createdAt , updatedAt will be added

const Product = new mongoose.model('Product1', productSchema)
           //mongoose will convert 'Product' to product1s (lowercase first letter and plural) -> collection name
           
export default Product