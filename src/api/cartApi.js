import axios from '../config/axios';

export const addCartApi = input => axios.post('/cart/add/', input);
export const fetchMyCartApi = userId => axios.post(`/cart/fetch/${userId}`);
export const deleteCartApi = userId => axios.post(`/cart/delete/${userId}`);
export const buyCartApi = () => axios.post(`/cart/buyIt/`);




