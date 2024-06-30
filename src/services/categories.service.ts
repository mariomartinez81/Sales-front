import useApiService from '@/hooks/useApiService';
import {
  CategoryProps,
  CreateOrUpdateCategoryProps,
  ResponseCategoryProps,
  ResponseDeleteCategoryProps,
} from './types/categories.types';

export const categoriesService = () => {
  const apiService = useApiService();

  const getCategories = async (query = {}): Promise<CategoryProps[]> => {
    const response = await apiService.get('categories', { params: query });
    return response.data;
  };

  const getCategory = async (id: string): Promise<ResponseCategoryProps> => {
    const response = await apiService.get(`categories/${id}`);
    return response.data;
  };

  const createCategory = async (
    data: CreateOrUpdateCategoryProps,
  ): Promise<CategoryProps> => {
    const response = await apiService.post('categories', data);
    return response.data;
  };

  const updateCategory = async (
    id: string,
    data: CreateOrUpdateCategoryProps,
  ): Promise<CategoryProps> => {
    const response = await apiService.put(`categories/${id}`, data);
    return response.data;
  };

  const deleteCategory = async (
    id: string,
  ): Promise<ResponseDeleteCategoryProps> => {
    const response = await apiService.delete(`categories/${id}`);
    return response.data;
  };

  return {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
  };
};
