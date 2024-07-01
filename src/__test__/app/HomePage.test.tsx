import Home from '@/app/page';
import { render, screen } from '@testing-library/react';

describe('Home page testing', () => {
  test('should render principal page', () => {
    const component = render(<Home />);
    const element = screen.getByText('Products');
    expect(element).toBeInTheDocument();
  });
});
