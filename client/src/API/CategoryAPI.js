import axios from 'axios';

const categoryApi = axios.create({
  baseURL: '/api/Categories',
});

export const getCategories = () => categoryApi.get('');

export default categoryApi;
