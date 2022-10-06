import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import axios from '../config/axios';
import {loading} from './LoadingSlice'

const authSlice = createSlice({
    name: 'auth',
    initialState: { isLogin: false, showLogin: false, showRegister: false ,userInfo:''},
    reducers: {
        showLogin: (state, action) => {
            state.showLogin = action.payload;
        },
        showRegister: (state, action) => {
            state.showRegister = action.payload;
        },
        login: (state, action) => {
            state.userInfo = action.payload.user
            state.isLogin = true;
        },
        logout: (state, action) => {
            localStorage.removeItem('token')
            state.isLogin = false;
        },
        rememberLogin:(state, action)=>{
            state.isLogin = true;
        },
        register: (state, action) => {
        }
    }
})


export const thunkRegister = registerInfo => async dispatch => {
    try {
        dispatch(loading(true))
        const res = await axios.post('/auth/register',registerInfo)
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
        const res = await axios.post('/auth/login',loginInfo)
        if(res.data.status === 'success') {
            localStorage.setItem('token',res.data.token);
            dispatch(login({"user":res.data.data}))
    }
        
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