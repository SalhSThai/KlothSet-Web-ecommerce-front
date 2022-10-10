
import { configureStore } from "@reduxjs/toolkit";
import authReducer from './AuthSlice';
import menuReducer from './MenuSlice';
import searchReducer from './SearchSlice';
import loadingReducer from './LoadingSlice';
import dataReducer from './DataSlice';
import editBarReducer from './EditBarSlice';
import shopReducer from './ShopSlice'
import cartReducer from './CartSlice'

  export const store = configureStore({
    reducer:{
      auth: authReducer,
      menu: menuReducer,
      search:searchReducer,
      loading:loadingReducer,
      data:dataReducer,
      editbar:editBarReducer,
      shop:shopReducer,
      cart:cartReducer
    }
    
  })
