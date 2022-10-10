import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createProduct, deleteProduct, editSubProductApi } from "../api/productApi";
import { loading } from "./LoadingSlice";
import { factchShopInfo, thunkAuthShopData } from "./ShopSlice";

const ProductSlice = createSlice({
    name: 'search',
    initialState: { showSearch: false },
    reducers: {
        product: (state, action) => {
            state.showSearch =action.payload
        },
    }
})

export const thunkCreateProduct= (formData) => async (dispatch) => {
    try {
        dispatch(loading(true))

    const res =  await createProduct(formData)
    toast("Create Successful")
        
    } catch (error) {
        toast.error(error.message)
    }
    finally{
        dispatch(loading(false))
    }
}
export const thunkDeleteProduct= (productId,userId) => async (dispatch) => {
    try {
        dispatch(loading(true))

    const res =  await deleteProduct(productId,userId)
    dispatch(factchShopInfo(res.data))
    toast("Delete Successful")
        
    } catch (error) {
        toast.error(error.message)
    }
    finally{
        dispatch(loading(false))
    }
}


export const thunkEditSubProduct= (productInfo) => async (dispatch) => {
    try {
        dispatch(loading(true))

    const res =  await editSubProductApi(productInfo)
    toast("Edit Successful")
        
    } catch (error) {
        toast.error(error.message)
    }
    finally{
        dispatch(loading(false))
    }
}

export default ProductSlice.reducer
const { product } = ProductSlice.actions;
export { product }