import axios from '../config/axios';

export const createProduct = input => axios.post('/product/create', input);
export const fetchShopData = input => axios.post(`/data/fetchShopData/${input}`); 
export const fetchCategoryDataAPI = shopId => axios.post(`/data/fetchCategoryData/${shopId}`);   

