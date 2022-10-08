import axios from '../config/axios';

export const createProduct = input => axios.post('/product/create', input);
