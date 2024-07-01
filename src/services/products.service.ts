import useApiService from '@/hooks/useApiService';
import {
  CreateOrUpdateProductProps,
  ProductProps,
  ResponseCreateOrUpdateProduct,
  ResponseDeleteProduct,
} from './types/products.types';

export const productsService = () => {
  const apiService = useApiService();

  const getProducts = async (query = {}): Promise<ProductProps[]> => {
    const response = await apiService.get('/products', { params: query });
    return response.data;
  };

  const getProduct = async (id: number): Promise<ProductProps> => {
    const response = await apiService.get(`/products/${id}`);
    return response.data;
  };

  const createProduct = async (
    data: CreateOrUpdateProductProps,
  ): Promise<ResponseCreateOrUpdateProduct> => {
    const response = await apiService.post('products', data);
    return response.data;
  };

  const updateProduct = async (
    id: number,
    data: CreateOrUpdateProductProps,
  ): Promise<ResponseCreateOrUpdateProduct> => {
    const response = await apiService.put(`/products/${id}`, data);
    return response.data;
  };

  const deleteProduct = async (id: number): Promise<ResponseDeleteProduct> => {
    const response = await apiService.delete(`/products/${id}`);
    return response.data;
  };

  return {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
  };
};
