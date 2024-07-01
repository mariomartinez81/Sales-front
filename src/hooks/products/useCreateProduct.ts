'use client';

import { productsService } from '@/services/products.service';
import { CreateOrUpdateProductProps } from '@/services/types/products.types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useCreateProduct = () => {
  const productsServices = productsService();
  const queryClient = useQueryClient();

  const createProduct = async (newProduct: CreateOrUpdateProductProps) => {
    try {
      const response = await productsServices.createProduct(newProduct);
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  const mutationCreateProduct = useMutation({
    mutationFn: createProduct,
  });
  return { ...mutationCreateProduct, queryClient };
};

export default useCreateProduct;
