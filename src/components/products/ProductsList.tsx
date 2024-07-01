import { ProductProps } from '@/services/types/products.types';
import React, { useState } from 'react';
import ProdutListItem from './ProdutListItem';
import ModalUpdateOrCreateProduct from './Modals/ModalUpdateOrCreateProduct';
import ModalDeleteProduct from './Modals/ModalDeleteProduct';

interface ProductsListProps {
  products: ProductProps[];
  openModalUpdate: boolean;
  productSelected: ProductProps | null;
  setOpenModalUpdate: (value: boolean) => void;
  setProductSelected: (value: ProductProps | null) => void;
}

const ProductsList = ({
  products,
  openModalUpdate,
  productSelected,
  setOpenModalUpdate,
  setProductSelected,
}: ProductsListProps) => {
  const [openDeleteProduct, setOpenDeleteProduct] = useState(false);

  const itemsDropdown = [
    {
      title: 'Edit',
      icon: 'FilePenLine',
      onClick: (e: any, product: ProductProps) => {
        e.stopPropagation();
        setProductSelected(product);
        setOpenModalUpdate(true);
      },
    },
    {
      title: 'Delete',
      icon: 'Trash',
      onClick: (e: any, product: ProductProps) => {
        e.stopPropagation();
        setProductSelected(product);
        setOpenDeleteProduct(true);
      },
    },
  ];

  return (
    <div>
      <ModalUpdateOrCreateProduct
        title={productSelected?.id ? 'Update Product' : 'Create Product'}
        description={
          productSelected?.id
            ? 'Please fill out the form fields with the new information for the product and click "Update" to save the changes.'
            : 'You are about to create a new product. Please fill out the form fields with the required information for the product and click "Create" to save the new product.'
        }
        titlePrimaryButton={productSelected?.id ? 'Update' : 'Create'}
        product={productSelected}
        open={openModalUpdate}
        setOpen={setOpenModalUpdate}
      />

      <ModalDeleteProduct
        id={productSelected?.id}
        open={openDeleteProduct}
        setOpen={setOpenDeleteProduct}
      />

      {products?.map((product) => (
        <ProdutListItem
          key={product?.id}
          product={product}
          itemsDropdown={itemsDropdown}
        />
      ))}
    </div>
  );
};

export default ProductsList;
