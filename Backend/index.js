import express from "express";
import { Connection } from "./database/db.js";
import { config } from "dotenv";
import { DefaultData } from "./default.js";
import userRouter from "./routes/userRoutes.js"
import productRouter from "./routes/productRoutes.js"
import paymentRouter from "./routes/paymentRoutes.js"
import cors from "cors"
import bodyParser from "body-parser";
import { v4 as uuid } from "uuid"
import Razorpay from "razorpay";

const app = express();

config({
    path: "./database/.env"
})

app.use(cors({
    
    Origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PATCH","PUT","DELETE"],
}))
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));



const PORT = process.env.PORT || 8080


//Database
Connection()


app.use(express.json())

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});


//router
app.use("/api/v1/users", userRouter),
    app.use("/api/v1/products", productRouter),
    app.use("/api/v1/payment", paymentRouter)



app.listen(PORT, () => {
    console.log(`Server is working on Port ${PORT}`)
})

DefaultData();






app.get("/api/getkey", (req, res) => res.status(200).json({ key: process.env.RAZORPAY_KEY_ID }))








