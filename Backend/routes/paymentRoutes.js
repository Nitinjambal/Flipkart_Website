import express from "express"
// import { addPaymentGateWay, checkout, paytmResponse } from "../controllers/paymentControllers.js";
import { checkout, paymentVerification } from "../controllers/paymentControllers.js";


const router = express.Router();


router.post("/checkout", checkout);
router.post("/paymentverification",paymentVerification)


export default router
