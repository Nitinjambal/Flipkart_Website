import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    firstname: { type: String, required: true, unique: true, trim: true },
    lastname: String,
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true, unique: true }
})

export const User = mongoose.model("User", UserSchema);