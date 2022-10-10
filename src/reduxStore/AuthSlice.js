import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {   loginApi, registerApi, rememberMeApi } from "../api/authApi";
import axios from '../config/axios';
import { addAccessToken, getAccessToken,removeAccessToken } from "../utils/localStorage";
import { thunkfetchMyCart } from "./CartSlice";
import {loading} from './LoadingSlice'
import { thunkAuthShopData } from "./ShopSlice";

const authSlice = createSlice({
    name: 'auth',
    initialState: { isLogin: false, showLogin: false, showRegister: false ,userInfo:{}},
    reducers: {
        showLogin: (state, action) => {
            state.showLogin = action.payload;
        },
        showRegister: (state, action) => {
            state.showRegister = action.payload;
        },
        login: (state, action) => {
            state.userInfo = action.payload
            state.isLogin = true;
        },
        logout: (state, action) => {
            removeAccessToken();
            state.isLogin = false;
            state.userInfo={};
        },
        rememberLogin:(state, action)=>{
            state.isLogin = true;
        }
    }
})


export const thunkRegister = registerInfo => async dispatch => {
    try {
        dispatch(loading(true))
        const res = await registerApi(registerInfo);
        res.data.status === 'success' && dispatch(register(true))
    } catch (error) {
        throw error
    }
    finally{
        dispatch(loading(false))
    }
}
export const thunkLogin = loginInfo => async dispatch => {
    try {
        dispatch(loading(true))
        const res = await loginApi(loginInfo)
        // const res = await axios.post('/auth/login',loginInfo)
        if(res.data.status === 'success') {
            addAccessToken(res.data.token);
            dispatch(login(res.data.user))
            dispatch(thunkAuthShopData(res?.data?.user?.id))
            dispatch(thunkfetchMyCart(res?.data?.user?.id));
    }
    } catch (error) {
        throw error
    }
    finally{
        dispatch(loading(false))
    }
}
export const thunkRemember =  () => async dispatch => {
    try {
        dispatch(loading(true))
        const user = await rememberMeApi(getAccessToken())
        user && dispatch(login(user?.data));
        dispatch(thunkAuthShopData(user?.data?.id))
        dispatch(thunkfetchMyCart(user?.data?.id));
    } catch (error) {
        throw error
    }
    finally{
        dispatch(loading(false))
    }
}

export default authSlice.reducer
const { login, register, showLogin,showRegister ,rememberLogin,logout} = authSlice.actions;
export { login, register, showLogin,showRegister,rememberLogin ,logout}