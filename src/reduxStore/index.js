
import { configureStore } from "@reduxjs/toolkit";
import authReducer from './AuthSlice'
import menuReducer from './MenuSlice'
import searchReducer from './SearchSlice'



  export const store = configureStore({
    reducer:{
      auth: authReducer,
      menu: menuReducer,
      search:searchReducer,
    }
    
  })
