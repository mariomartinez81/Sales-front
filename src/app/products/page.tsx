'use client';

import EmptyStateProducts from '@/components/products/EmptyStateProducts';
import ProductsList from '@/components/products/ProductsList';

interface PageProps {
  props: any;
}

const ProductsPage = ({ props }: PageProps) => {
  const products = [{ id: 1, name: 'Product 1' }];

  return (
    <>
      {products?.length ? (
        <ProductsList products={products} />
      ) : (
        <EmptyStateProducts />
      )}
    </>
  );
};

export default ProductsPage;
