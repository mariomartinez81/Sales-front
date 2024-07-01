import RootLayout from '@/app/layout';
import { render, screen } from '@testing-library/react';

describe('RootLayout', () => {
  test('should render RootLayout', () => {
    render(
      <RootLayout>
        <div>Children</div>
      </RootLayout>,
    );
    expect(screen.getByText('Children')).toBeInTheDocument();
  });
  test('should render Render Navbar component', () => {
    render(
      <RootLayout>
        <div>Children</div>
      </RootLayout>,
    );
    expect(screen.getByText('Categories')).toBeInTheDocument();
    expect(screen.getByText('Orders')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Customers')).toBeInTheDocument();
  });
});
