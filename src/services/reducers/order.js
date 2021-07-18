import {
    GET_ORDER_ID_FAILED,
    GET_ORDER_ID_REQUEST,
    GET_ORDER_ID_SUCCESS,
    RESET_ORDER,
} from '../actions/order';

const initialState = {
    orderId: 0,
    orderIdRequest: false,
    orderIdRequestFailed: false,
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER_ID_REQUEST: {
            return { ...state, orderIdRequest: true };
        }
        case GET_ORDER_ID_SUCCESS: {
            return {
                ...state,
                orderId: action.orderId,
                orderIdRequestFailed: false,
                orderIdRequest: false,
            };
        }
        case GET_ORDER_ID_FAILED: {
            return { ...state, orderIdRequest: false, orderIdRequestFailed: true };
        }
        case RESET_ORDER: {
            return { ...initialState };
        }
        default: {
            return state;
        }
    }
};