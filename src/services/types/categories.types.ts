import { ProductProps } from './products.types';

export interface CategoryProps {
  id: number;
  name: string;
  image: string;
  createdAt: Date;
}

export interface ResponseCategoryProps extends CategoryProps {
  products: Omit<ProductProps, 'category'>[];
}

export interface CreateOrUpdateCategoryProps {
  name?: string;
  image?: string;
}

export interface ResponseDeleteCategoryProps {
  id: number | string;
}
