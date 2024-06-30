import { CategoryProps } from './categories.types';

export interface ProductProps {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  createdAt: Date | string;
  categoryId: number;
  category: CategoryProps;
}

export interface ResponseCreateOrUpdateProduct
  extends Omit<ProductProps, 'category'> {}

export interface ResponseDeleteProduct {
  id: number | string;
}

export interface ProductWithCategoryProps {}

export interface CreateOrUpdateProductProps {
  name?: string;
  image?: string;
  description?: string;
  price?: number;
  categoryId?: number;
}
