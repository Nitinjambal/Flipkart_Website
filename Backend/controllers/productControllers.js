import { Product } from "../models/productSchema.js"


export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})

        res.status(200).json({
            products
        })
    } catch (error) {
        console.log('error:', error)
        res.status(500).json({
            message: error.message
        })
    }
}




export const getProductDetails = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findOne({ id: id })
        if (!product) {
            res.status(404).json({
                messsage: "Product doesn't found"
            })
        }

        res.status(200).json({
            product
        })

    } catch (error) {
        console.log('error:', error)
        res.status(500).json({

            message: error
        })
    }
}


