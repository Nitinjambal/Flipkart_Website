import express from "express"
import { getProductDetails, getProducts } from "../controllers/productControllers.js";

const router = express.Router()


router.get("/products", getProducts)
router.get("/product/:id", getProductDetails)




export default router;