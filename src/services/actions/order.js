import { fetchedOrder } from '../../api';
import {DELETE_INGREDIENTS} from "./constructor";

export const GET_ORDER_ID_REQUEST = 'GET_ORDER_ID_REQUEST';
export const GET_ORDER_ID_SUCCESS = 'GET_ORDER_ID_SUCCESS';
export const GET_ORDER_ID_FAILED = 'GET_ORDER_ID_FAILED';
export const RESET_ORDER = 'RESET_ORDER';

export function getOrderId(burger) {
    const ingredients = burger.map((ingredient) => ingredient['_id']);
    return function (dispatch) {
        dispatch({
            type: GET_ORDER_ID_REQUEST,
        });
        fetchedOrder(ingredients)
            .then((res) => {
                if (res && res.success) {
                    dispatch({
                        type: GET_ORDER_ID_SUCCESS,
                        orderId: res.order.number,
                    });
                    dispatch({
                        type: DELETE_INGREDIENTS,
                    })
                }
            })
            .catch(() => {
                dispatch({
                    type: GET_ORDER_ID_FAILED,
                });
            });
    };
}