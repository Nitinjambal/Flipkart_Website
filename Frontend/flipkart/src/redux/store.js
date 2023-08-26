import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { reducer as productReducer } from "./productReducer/reducer.js"
import { reducer as cartReducer } from "./cartReducer/reducer.js"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    productReducer,
    cartReducer
})

const middleware = [thunk]


export const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))