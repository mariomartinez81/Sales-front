import ModalConfirmation from '@/components/common/Modals/ModalConfirmation';
import { toast } from '@/components/ui/use-toast';
import useDeleteProduct from '@/hooks/products/useDeleteProduct';
import React from 'react';

interface ModalDeleteProductProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  id?: number | string;
}

const ModalDeleteProduct = ({ open, setOpen, id }: ModalDeleteProductProps) => {
  const {
    mutate: deleteProduct,
    isPending: isLoading,
    queryClient,
  } = useDeleteProduct();

  const handleDeleteProduct = () => {
    if (id) {
      deleteProduct(+id, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['products'] });
          toast({
            title: 'Product deleted successfully',
            status: 'success',
          });
          setOpen(false);
        },
      });
    }
  };

  return (
    <ModalConfirmation
      title="Delete Product"
      description="You are about to delete the selected product. This action cannot be undone. Please confirm that you want to permanently delete this product by clicking the 'Delete' button."
      open={open}
      setOpen={setOpen}
      isLoading={isLoading}
      handleClickSecondaryButton={() => setOpen(false)}
      handleClickPrimaryButton={handleDeleteProduct}
    />
  );
};

export default ModalDeleteProduct;
