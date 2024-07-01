'use client';

import LoaderSpiner from '@/components/common/Loaders/LoaderSpiner';
import EmptyStateProducts from '@/components/products/EmptyStateProducts';
import ProductsList from '@/components/products/ProductsList';
import { Button } from '@/components/ui/button';

import useFetchProducts from '@/hooks/products/useFetchProducts';
import { ProductProps } from '@/services/types/products.types';
import { useState } from 'react';

interface PageProps {
  props: any;
}

const ProductsPage = ({ props }: PageProps) => {
  const { data: products, isLoading } = useFetchProducts();
  const [productSelected, setProductSelected] = useState<ProductProps | null>(
    null,
  );
  const [openModalUpdate, setOpenModalUpdate] = useState(false);

  const handleOpenModalCreate = () => {
    setProductSelected(null);
    setOpenModalUpdate(true);
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="grid w-full h-full place-items-center">
          <LoaderSpiner size={80} color="gray" />
        </div>
      );
    }
    if (!products?.length) {
      return <EmptyStateProducts />;
    }

    return (
      <ProductsList
        products={products}
        openModalUpdate={openModalUpdate}
        setOpenModalUpdate={setOpenModalUpdate}
        setProductSelected={setProductSelected}
        productSelected={productSelected}
      />
    );
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex w-full justify-between p-6">
        <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
        <Button onClick={handleOpenModalCreate}>Add Product</Button>
      </div>

      {renderContent()}
    </div>
  );
};

export default ProductsPage;
