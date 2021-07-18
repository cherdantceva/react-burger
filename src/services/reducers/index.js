import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { burgerConstructorReducer } from "./constructor";
import { orderReducer } from "./order";
export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    burgerConstructor: burgerConstructorReducer,
    order: orderReducer,
});