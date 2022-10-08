import { createSlice } from "@reduxjs/toolkit";
import { fetchAuthShopDataApi } from "../api/authShopApi";


const ShopSlice = createSlice({
    name: 'shop',
    initialState: { shopPath: false ,shopInfo:""},
    reducers: {
        factchShopInfo: (state, action) => {
            state.shopInfo =action.payload
        },
    }
})

export const thunkAuthShopData = userId => async dispatch => {
    try {
        console.log(userId,'userId');
        const res = await fetchAuthShopDataApi(userId)
        console.log(res,'res');
        dispatch(factchShopInfo(res.data))
    } catch (error) {
        throw error
    }
    finally{
    }
}

export default ShopSlice.reducer
const { factchShopInfo } = ShopSlice.actions;
export { factchShopInfo }