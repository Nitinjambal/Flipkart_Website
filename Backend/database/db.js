import mongoose from "mongoose"

export const Connection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "flipkart_backend"
        })
        console.log("Database connected")
    } catch (error) {
        console.log('error:', error.reason)

    }
}