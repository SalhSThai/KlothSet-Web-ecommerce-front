import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchCategoryDataAPI, fetchProductDataAPI, fetchShopData, fetchShopDataByshopNameApi } from "../api/dataApi";
import { loading } from "./LoadingSlice";


const dataSlice = createSlice({
    name: 'path',
    initialState: { allPath: [],shopInfo:{} ,productCategory:{},allProductInfo:[],num:0},
    reducers: {
        fetchPath: (state, action) => {
            state.allPath = action.payload;
        },
        fetchShopInfo: (state, action)=>{
            state.shopInfo = action.payload;
        },
        fetchProductCategory: (state, action)=>{
            state.productCategory = action.payload;
        },
        fetchAllProduct: (state, action)=>{
            state.allProductInfo = action.payload;
        },
        plus:(state, action)=>{
            state.num += 1
        }
    }
})

export const thunkPath = pathInfo => async dispatch => {
    try {

        const res = await axios.get('/data/fetchPath')
        const allPath =  res.data?.map(item=>item.shopPath)
        dispatch(fetchPath(allPath ))
    } catch (error) {
        throw error
    }
    finally{
    }
}
export const thunkShopData = path => async dispatch => {
    try {
        dispatch(loading(true))

        const res = await fetchShopDataByshopNameApi(path)
        dispatch(fetchShopInfo(res.data))

    } catch (error) {
        throw error
    }
    finally{
        dispatch(loading(false))

    }
}

export const thunkCategoryData = shopId => async dispatch => {
    try {
        const res = await fetchCategoryDataAPI(shopId);
        dispatch(fetchProductCategory(res.data));
        console.log(res.data,'data');

    } catch (error) {
        throw error
    }
    finally{
    }
}

export const thunkAllProduct = () => async dispatch => {
    try {
        dispatch(loading(true))
        const res = await fetchProductDataAPI();
        dispatch(fetchAllProduct(res.data));
        console.log(res.data,'data');

    } catch (error) {
        throw error
    }
    finally{
        dispatch(loading(false))
    }
}

export const thunkPlus = () => async dispatch => {
    dispatch(plus())
}

export default dataSlice.reducer
const { fetchPath ,fetchShopInfo,fetchProductCategory,fetchAllProduct,plus} = dataSlice.actions;
export { fetchPath ,fetchShopInfo,fetchProductCategory,fetchAllProduct,plus}