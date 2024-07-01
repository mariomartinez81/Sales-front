import React from 'react';
import UpdateOrCreateProductForm from '@/components/products/UpdateOrCreateProductForm';
import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { ProductProps } from '@/services/types/products.types';

interface ModalUpdateOrCreateProductProps {
  title: string;
  description: string;
  product: ProductProps | null;
  open: boolean;
  titlePrimaryButton?: string;
  titleSecondaryButton?: string;
  setOpen: (value: boolean) => void;
}

const ModalUpdateOrCreateProduct = ({
  title,
  description,
  product,
  open,
  titlePrimaryButton = 'Save',
  titleSecondaryButton = 'Cancel',
  setOpen,
}: ModalUpdateOrCreateProductProps) => {
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <Dialog modal open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader className="space-y-4">
          <DialogTitle className="grid place-items-center">{title}</DialogTitle>
          <DialogDescription className="grid place-items-center text-align">
            {description}
          </DialogDescription>
        </DialogHeader>

        <UpdateOrCreateProductForm
          product={product}
          titlePrimaryButton={titlePrimaryButton}
          handleSecondaryButton={handleCancel}
          setOpen={setOpen}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ModalUpdateOrCreateProduct;
