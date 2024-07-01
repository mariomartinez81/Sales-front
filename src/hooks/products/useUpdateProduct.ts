import { productsService } from '@/services/products.service';
import { CreateOrUpdateProductProps } from '@/services/types/products.types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface UpdateProductParams {
  id: number;
  updateData: CreateOrUpdateProductProps;
}

const useUpdateProduct = () => {
  const productsServices = productsService();
  const queryClient = useQueryClient();

  const updateProduct = async ({ id, updateData }: UpdateProductParams) => {
    try {
      const response = await productsServices.updateProduct(id, updateData);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const mutationUpdateProduct = useMutation({
    mutationFn: updateProduct,
  });
  return { ...mutationUpdateProduct, queryClient };
};

export default useUpdateProduct;
