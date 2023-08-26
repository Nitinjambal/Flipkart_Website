

import { instance } from "../index.js"
import crypto from "crypto"

export const checkout=async(req,res)=>{

    const options = {
        amount:50000 ,  // amount in the smallest currency unit
        currency: "INR",
      };

      const order=await instance.orders.create(options)

      res.status(200).json({
        success:true,
        order
      })

}

export const paymentVerification=async(req,res)=>{
    console.log(req.body)

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // Database comes here

    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    alert("payment successful")
    res.redirect(
      `https://incredible-basbousa-7d2a10.netlify.app/success`
    );
  } else {
    res.status(400).json({
      success: false,
    });
  }


}