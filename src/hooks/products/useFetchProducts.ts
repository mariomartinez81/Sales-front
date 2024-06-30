import { productsService } from '@/services/products.service';
import { useQuery } from '@tanstack/react-query';

const useFetchProducts = () => {
  const productsServices = productsService();

  const fetchProducts = async () => {
    try {
      const products = await productsServices.getProducts();
      return products;
    } catch (error) {
      console.error(error);
    }
  };

  const queryProducts = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  return { ...queryProducts };
};

export default useFetchProducts;
