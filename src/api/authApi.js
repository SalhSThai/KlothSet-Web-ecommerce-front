import axios from '../config/axios';

export const registerApi = input => axios.post('/auth/register', input);
export const loginApi = (input) =>  axios.post('/auth/login', input);
export const rememberMeApi = (token) => axios.post('/auth/remember',token);
export const fetchShopPathAPI = userId => axios.post(`/auth/fetchShopPath/${userId}`);   
// export const fetchCategoryDataAPI = shopId => axios.post(`/fetchCategoryData/${shopId}`);   
