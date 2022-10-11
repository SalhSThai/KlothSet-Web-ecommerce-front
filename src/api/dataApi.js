import axios from '../config/axios';

export const fetchShopDataByshopNameApi = path => axios.post(`/data/fetchShopData/${path}`); 
export const fetchCategoryDataAPI = shopId => axios.post(`/data/fetchCategoryData/${shopId}`);   
export const fetchProductDataAPI = () => axios.get(`/data/fetchProductData/`);  

