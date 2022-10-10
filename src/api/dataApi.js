import axios from '../config/axios';

export const fetchShopData = input => axios.post(`/data/fetchShopData/${input}`); 
export const fetchCategoryDataAPI = shopId => axios.post(`/data/fetchCategoryData/${shopId}`);   
export const fetchProductDataAPI = () => axios.get(`/data/fetchProductData/`);  

