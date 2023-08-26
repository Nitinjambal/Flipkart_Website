import { User } from "../models/userSchema.js"
import bcrypt from "bcrypt"



export const userRegister = async (req, res) => {
    try {
        const { email, password, firstname, lastname, phone } = req.body
        const userPresent = await User.findOne({ email })
        if (userPresent) {
            res.status(404).json({
                message: "User already present"
            })
        }


        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = await User.create({
            email,
            password: hashPassword,
            firstname,
            lastname,
            phone
        })

        res.status(201).json({
            success: true,
            message: "User Registered Successfully",
            newUser
        })
    } catch (error) {
        console.log('error:', error)
        res.status(404).json({
            error
        })

    }
}



export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const isUserPresent = await User.findOne({ email })


        if (!isUserPresent) {
            return res.status(404).json({
                message: "Invalid Email Or Password"
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, isUserPresent.password)

        if (!isPasswordMatch) {
            res.status(404).json({
                message: "Invalid Email Or Password"
            })
        }
        res.status(200).json({
            success: true,
            message: `${isUserPresent.firstname} Login Successfully`,
            isUserPresent
        })

    } catch (error) {
        res.status(505).json({
            message: error
        })
        console.log('error:', error)

    }
}



