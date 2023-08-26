import { ADD_CART_SUCCESS, CART_FAILURE, CART_REQUEST, REMOVE_CART_SUCCESS } from "./actionTypes"


const initialState = {
    isLoading: false,
    isError: false,
    cartItems: []
}


export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CART_REQUEST:
            return {
                ...state, isLoading: true, isError: false
            }



        case ADD_CART_SUCCESS: {
            const item = payload;
            // console.log('item:', item)
            const exist = state.cartItems.find(product => product.id == item.id);
            if (exist) {
                return { ...state, isLoading: false, isError: false, cartItems: state.cartItems.map(data => data.id == exist.id ? item : data) }
            } else {
                return { ...state, isLoading: false, isError: false, cartItems: [...state.cartItems, item] }
            }
        }

        case CART_FAILURE:
            return {
                ...state, isLoading: false, isError: true, cartItems: []
            }


        case REMOVE_CART_SUCCESS: {
            // console.log("reducerpayload", payload)
            return { ...state, cartItems: state.cartItems.filter(product => product.id !== payload) }
        }

        default:
            return state
    }
}