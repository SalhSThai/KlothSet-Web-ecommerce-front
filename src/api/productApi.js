import axios from '../config/axios';

export const createProduct = input => axios.post('/product/create', input);
export const createSubProduct = input => axios.post('/product/createSub', input);

export const deleteProduct = (productId,userId) => axios.delete(`/product/delete/${productId}/${userId}`);

export const editSubProductApi = input => axios.post('/product/edit/', input);
export const editProductApi = input => axios.post('/product/editMain/', input);


