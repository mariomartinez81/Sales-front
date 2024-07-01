import { render, screen } from '@testing-library/react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import ProductsPage from '@/app/products/page';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { productsMock } from '../mocks/products/products.mock';

describe('Products page testing', () => {
  const queryClient = new QueryClient();

  beforeEach(() => {
    (useQuery as jest.Mock).mockImplementation(() => ({
      isLoading: false,
      error: null,
      data: productsMock,
    }));
  });

  test('should render products page', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouterProvider>
          <ProductsPage />
        </MemoryRouterProvider>
      </QueryClientProvider>,
    );
    expect(screen.getByText('Inventory')).toBeInTheDocument();
  });
});
