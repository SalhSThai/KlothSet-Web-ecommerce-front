import { createSlice } from "@reduxjs/toolkit";
import { changeCoverApi } from "../api/authApi";
import { fetchAuthShopDataApi, uploadCarousal } from "../api/authShopApi";
import { loading } from "./LoadingSlice";


const ShopSlice = createSlice({
    name: 'shop',
    initialState: { shopPath: false ,shopInfo:""},
    reducers: {
        factchShopInfo: (state, action) => {
            state.shopInfo =action.payload
        },
        addNewProduct: (state, action) => {
            state.shopInfo ={...state.shopInfo}
        },
        changeCoverShop: (state, action) => {
            state.shopInfo ={...state.shopInfo,ShopCarousals:[action.payload]}
        },


    }
})

export const thunkAuthShopData = userId => async dispatch => {
    try {
        const res = await fetchAuthShopDataApi(userId)
        dispatch(factchShopInfo(res.data))
    } catch (error) {
        throw error
    }
    finally{
    }
}
export const thunkUploadCarousal = (formData,id) => async dispatch => {
    try {
        dispatch(loading(true))
        const res = await changeCoverApi(formData,id)
        dispatch(changeCoverShop(res.data))
    } catch (error) {
        throw error
    }
    finally{
        dispatch(loading(false))

    }
}

export default ShopSlice.reducer
const { factchShopInfo,addNewProduct,changeCoverShop} = ShopSlice.actions;
export { factchShopInfo ,addNewProduct,changeCoverShop}