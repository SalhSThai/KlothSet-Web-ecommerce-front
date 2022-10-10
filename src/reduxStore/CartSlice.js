import { createSlice } from "@reduxjs/toolkit";
import { addCartApi, fetchMyCartApi } from "../api/cartApi";
import { loading } from "./LoadingSlice";

const CartSlice = createSlice({
    name: 'cart',
    initialState: { Mycart:[]},
    reducers: {
        addCart: (state, action) => {
            state.Mycart = action.payload
        },
        fetchCart: (state, action) => {
            state.Mycart = [...state.Mycart,...action.payload]
        },
    }
})


export const thunkAddCart = (input) => async dispatch => {
    try {
        dispatch(loading(true))
        const res = await addCartApi(input);
        dispatch(addCart(res.data));

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
        console.log(input);
        console.log(res,"====================================");
        dispatch(fetchCart(res.data));

    } catch (error) {
        throw error
    }
    finally{
        dispatch(loading(false))
    }
}

export default CartSlice.reducer
const { addCart,fetchCart} = CartSlice.actions;
export { addCart,fetchCart}