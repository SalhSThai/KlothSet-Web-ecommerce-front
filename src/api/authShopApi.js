import axios from '../config/axios';

export const fetchAuthShopDataApi = userId => axios.post(`/auth/fetchAuthShop/${userId}` );
export const deleteProductApi = userId => axios.post(`/auth/fetchAuthShop/${userId}` );
export const editProductApi = userId => axios.post(`/auth/fetchAuthShop/${userId}` );


// export const fetchShopData = input => axios.post(`/data/fetchShopData/${input}`); 
// export const fetchCategoryDataAPI = shopId => axios.post(`/data/fetchCategoryData/${shopId}`);   

