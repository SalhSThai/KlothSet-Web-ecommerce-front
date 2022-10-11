import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createProduct, createSubProduct, deleteProduct, editProductApi, editSubProductApi } from "../api/productApi";
import { loading } from "./LoadingSlice";
import { addNewProduct, factchShopInfo, refresh, thunkAuthShopData } from "./ShopSlice";

const ProductSlice = createSlice({
    name: 'search',
    initialState: { showSearch: false },
    reducers: {
        product: (state, action) => {
            state.showSearch = action.payload
        },
    }
})

export const thunkCreateProduct = (formData) => async (dispatch) => {
    try {
        dispatch(loading(true))

        const res = await createProduct(formData)
        console.log("product ===================", res.data, "==============================");
        dispatch(factchShopInfo(res.data))
        toast("Create Successful")

    } catch (error) {
        toast.error(error.message)
    }
    finally {
        dispatch(loading(false))
    }
}
export const thunkSubCreateProduct = (formData) => async (dispatch) => {
    try {
        dispatch(loading(true))

        const res = await createSubProduct(formData)
        console.log("product ===================", res.data, "==============================");
        dispatch(factchShopInfo(res.data))
        toast("Create Successful")

    } catch (error) {
        toast.error(error.message)
    }
    finally {
        dispatch(loading(false))
    }
}
export const thunkDeleteProduct = (productId, userId) => async (dispatch) => {
    try {
        dispatch(loading(true))

        const res = await deleteProduct(productId, userId)
        dispatch(factchShopInfo(res.data))
        toast("Delete Successful")

    } catch (error) {
        toast.error(error.message)
    }
    finally {
        dispatch(loading(false))
    }
}

export const thunkEditProduct = (formData) => async (dispatch) => {
    try {
        dispatch(loading(true))
        const res = await editProductApi(formData)
        dispatch(factchShopInfo(res.data))
        toast("Edit Successful")


    } catch (error) {
        toast.error(error.message)
    }
    finally {
        dispatch(loading(false))
    }
}
export const thunkEditSubProduct = (productInfo) => async (dispatch) => {
    try {
        dispatch(loading(true))

        const res = await editSubProductApi(productInfo)
        dispatch(factchShopInfo(res.data))
        toast("Edit Successful")

    } catch (error) {
        toast.error(error.message)
    }
    finally {
        dispatch(loading(false))
    }
}

export default ProductSlice.reducer
const { product } = ProductSlice.actions;
export { product }