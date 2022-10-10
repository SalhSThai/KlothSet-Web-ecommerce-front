import axios from '../config/axios';

export const createProduct = input => axios.post('/product/create', input);
export const deleteProduct = (productId,userId) => axios.delete(`/product/delete/${productId}/${userId}`);

export const editSubProductApi = input => axios.post('/product/edit/', input);

