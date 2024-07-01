'use client';

import ErrorLayout from '@/layouts/ErrorLayout';

const ErrorProductsId = () => {
  return (
    <ErrorLayout
      error={new Error('Error:  Something went wrong to load this page')}
      reset={() => {}}
    />
  );
};

export default ErrorProductsId;
