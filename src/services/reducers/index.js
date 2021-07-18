import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { burgerConstructorReducer } from "./constructor";

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    burgerConstructor: burgerConstructorReducer,
});