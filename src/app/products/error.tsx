'use client';

import ErrorLayout from '@/layouts/ErrorLayout';
import React from 'react';

const ErrorProductsPage = () => {
  return (
    <ErrorLayout
      error={new Error('Error: Something went wrong to load this page')}
    />
  );
};

export default ErrorProductsPage;
