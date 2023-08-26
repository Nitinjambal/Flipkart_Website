import axios from "axios"
import { ADD_CART_SUCCESS, CART_FAILURE, CART_REQUEST, REMOVE_CART_SUCCESS } from "./actionTypes"

const URL = "https://flipkart-backend-deploy-zwcf.onrender.com/api/v1/products"


export const addToCart = (id, quantity) => async (dispatch) => {
    dispatch({ type: CART_REQUEST })
    try {
        const { data } = await axios.get(`${URL}/product/${id}`)
        // console.log('addCartproduct:',typeof(data.product))
        dispatch({ type: ADD_CART_SUCCESS, payload: data.product })
    } catch (error) {
        // console.log('error:', error)
        dispatch({ type: CART_FAILURE })
    }
}





export const removeFromCart = (id) => (dispatch) => {
    dispatch({ type: REMOVE_CART_SUCCESS, payload: id })
}