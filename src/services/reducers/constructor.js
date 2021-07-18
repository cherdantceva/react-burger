import {
    ADD_INGREDIENT,
    INGREDIENT_MIX,
    ADD_BUN,
    DELETE_INGREDIENT,
    DELETE_INGREDIENTS
} from "../actions/constructor";

const initialState = {
    ingredients: [],
    bun: null
};

export const burgerConstructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT: {
            return {
                ...state,
                ingredients: [...state.ingredients, action.ingredient],
            };
        }
        case INGREDIENT_MIX: {
            return {
                ...state,
                ingredients: [
                    ...state.ingredients.slice(0, action.index),
                    action.ingredient,
                    ...state.ingredients.slice(action.index),
                ],
            };
        }
        case ADD_BUN: {
            return { ...state, bun: action.bun };
        }
        case DELETE_INGREDIENT: {
            return {
                ...state,
                ingredients: [
                    ...state.ingredients.slice(0, action.index),
                    ...state.ingredients.slice(action.index + 1),
                ],
            };
        }
        case DELETE_INGREDIENTS: {
            return {
                ...state,
                ingredients: [],
                bun: null
            };
        }

        default: {
            return state;
        }
    }
};