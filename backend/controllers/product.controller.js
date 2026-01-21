import Product from "../models/product.model.js"
import { isValidObjectId } from "mongoose"

export const createProduct = async (req, res) => {
    const product = req.body

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please provide all the fields" }) //400 client error
    }

    const newProduct = new Product(product)
    console.log(newProduct)
    try {
        await newProduct.save()
        return res.status(201).json({ success: true, message: "product was created", product: newProduct }) //201 success and created
    }
    catch (error) {
        console.log("Error in creating product: ", error)
        return res.status(500).json({ success: false, message: "Server Error" }) //500 internal server error
    }
}

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        return res.status(200).json({ status: true, message: "All products have been fetched successfully", products: products }) //200 success
    }
    catch (err) {
        console.log("Error in fetching products", err)
        return res.status(500).json({ status: false, message: "Server Error" }) //500 server err
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params
    // “findByIdAndDelete returns null when the document doesn’t exist and throws an error for invalid ObjectIds, so we must handle both cases separately.”

    try {
        const deleted = await Product.findByIdAndDelete(id) //null if not found (it doesnt throw error)
        if (deleted) return res.status(200).json({ status: true, message: "Product Deleted Successfully" })    //200 success
        else return res.status(404).json({ status: false, message: "Product Not Found" })   // 404 page not found
    }
    catch (err) {
        console.log("Error in deleting product", err)
        return res.status(400).json({ status: false, message: "Invalid Product ID" })   //400 invalid client request
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params
    const product = req.body

    if (!isValidObjectId(id)) {
        return res.status(404).json({ status: false, message: "Invalid Object ID" })
        //better way first check VALID ID
    }

    try {
        const updatedproduct = await Product.findByIdAndUpdate(id, product, { new: true }) //return the newly updated product
        return res.status(200).json({ status: true, message: "Updated successfully", updatedproduct: updatedproduct })
    }
    catch (err) {
        console.log("Error in updating product", err)
        return res.status(500).json({ status: false, message: "Server Error" })
    }
}