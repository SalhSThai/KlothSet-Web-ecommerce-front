import { createSlice } from "@reduxjs/toolkit";
import { addCartApi, buyCartApi, deleteCartApi, fetchMyCartApi } from "../api/cartApi";
import { loading } from "./LoadingSlice";

const CartSlice = createSlice({
    name: 'cart',
    initialState: { Mycart:[]},
    reducers: {
        addCart: (state, action) => {
            console.log(action.payload,"1");
            state.Mycart = [...action.payload]
        },
        fetchCart: (state, action) => {
            console.log(action.payload,"2");
            state.Mycart = [...action.payload]
        },
        deleteCart:(state,action) => {
            state.Mycart = []

        }
    }
})


export const thunkAddCart = (input) => async dispatch => {
    try {
        dispatch(loading(true))
        const res = await addCartApi(input);
        dispatch(fetchCart(res.data));

    } catch (error) {
        throw error
    }
    finally{
        dispatch(loading(false))
    }
}
export const thunkfetchMyCart = (input) => async dispatch => {
    try {
        dispatch(loading(true))
        const res = await fetchMyCartApi(input);
        dispatch(fetchCart(res.data));

    } catch (error) {
        throw error
    }
    finally{
        dispatch(loading(false))
    }
}
export const thunkDeleteCart = (id) => async dispatch => {
    try {
        dispatch(loading(true))
        const res = await deleteCartApi(id);
        dispatch(deleteCart([]));

    } catch (error) {
        throw error
    }
    finally{
        dispatch(loading(false))
    }
}
export const thunkBuyCart = () => async dispatch => {
    try {
        dispatch(loading(true))
        const res = await buyCartApi();
        dispatch(deleteCart([]));

    } catch (error) {
        throw error
    }
    finally{
        dispatch(loading(false))
    }
}

export default CartSlice.reducer
const { addCart,fetchCart,deleteCart} = CartSlice.actions;
export { addCart,fetchCart,deleteCart}