import { categoriesService } from '@/services/categories.service';
import { useQuery } from '@tanstack/react-query';

const useFetchCategories = () => {
  const categoryService = categoriesService();

  const fetchCategories = async () => {
    try {
      const categories = await categoryService.getCategories();
      return categories;
    } catch (error) {
      console.error(error);
    }
  };

  const queryCategories = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  return { ...queryCategories };
};

export default useFetchCategories;
