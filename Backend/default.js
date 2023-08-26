import { products } from "./constants/data.js"
import { Product } from "./models/productSchema.js"

export const DefaultData = async () => {
    try {
        await Product.insertMany(products);
        console.log("product insert successfully")
    } catch (error) {
        console.log('error while inserting defalult data', error.message)

    }
}