import { createSlice } from "@reduxjs/toolkit";
import axios from '../config/axios';

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
            localStorage.setItem('token',action.payload.token);
            state.userInfo = action.payload.data.username
            state.isLogin = true;
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
        console.log(registerInfo);
        const res = await axios.post('/auth/register',registerInfo)
        res.data.status === 'success' && dispatch(register(true))
    } catch (error) {
        
    }
}
export const thunkLogin = loginInfo => async dispatch => {
    try {
        console.log(loginInfo);
        const res = await axios.post('/auth/login',loginInfo)
        res.data.status === 'success' && dispatch(login({token:res.data.token,data:res.data.data}))
        
    } catch (error) {
        
    }
}

export default authSlice.reducer
const { login, register, showLogin,showRegister ,rememberLogin} = authSlice.actions;
export { login, register, showLogin,showRegister,rememberLogin }