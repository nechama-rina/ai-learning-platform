import axios from 'axios';

const subCategoryApi = axios.create({
  baseURL: '/api/SubCategories',
});

export const getSubCategoriesByCategoryId = (categoryId) =>
  subCategoryApi.get(`byCategory/${categoryId}`);

export default subCategoryApi;
