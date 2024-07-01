import { productsService } from '@/services/products.service';
import { useQuery } from '@tanstack/react-query';

const useFetchProduct = (id: number) => {
  const productsServices = productsService();

  const fetchProduct = async () => {
    if (!id) return;
    try {
      const product = await productsServices.getProduct(id);
      return product;
    } catch (error) {
      console.error(error);
    }
  };

  const queryProduct = useQuery({
    queryKey: ['product', id],
    queryFn: fetchProduct,
    enabled: !!id,
  });

  return { ...queryProduct };
};

export default useFetchProduct;
