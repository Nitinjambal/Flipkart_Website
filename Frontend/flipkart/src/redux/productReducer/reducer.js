import { GET_PRODUCT_DETAILS_SUCCESS, GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./acitonTypes.js"


const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    singleProduct: {}
}


export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCT_REQUEST:
            return {
                ...state, isLoading: true, isError: false
            }


        case GET_PRODUCT_SUCCESS:
            return {
                ...state, isLoading: false, isError: false, products: payload
            }

        case GET_PRODUCT_FAILURE:
            return {
                ...state, isLoading: false, isError: true
            }

        case GET_PRODUCT_DETAILS_SUCCESS:
            return {
                ...state, isLoading: false, isError: false, singleProduct: payload
            }
        default:    
            return state

    }
}



