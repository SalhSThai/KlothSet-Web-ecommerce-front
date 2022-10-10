import axios from '../config/axios';

export const addCartApi = input => axios.post('/cart/add/', input);
export const fetchMyCartApi = userId => axios.post(`/cart/fetch/${userId}`);


