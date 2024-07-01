'use client';

import { productsService } from '@/services/products.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useDeleteProduct = () => {
  const productsServices = productsService();
  const queryClient = useQueryClient();
  const deleteProduct = async (id: number) => {
    try {
      const response = await productsServices.deleteProduct(id);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const mutationDeleteProduct = useMutation({
    mutationFn: deleteProduct,
  });

  return { ...mutationDeleteProduct, queryClient };
};

export default useDeleteProduct;
