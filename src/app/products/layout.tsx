import React from 'react';

import DetailsLayout from '@/layouts/DetailsLayout';

interface LayoutProductsProps {
  children: React.ReactNode;
}

const LayoutProducts = ({ children }: LayoutProductsProps) => {
  return (
    <>
      <DetailsLayout>{children}</DetailsLayout>
    </>
  );
};

export default LayoutProducts;
