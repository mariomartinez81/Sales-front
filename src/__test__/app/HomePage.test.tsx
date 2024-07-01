import { render } from '@testing-library/react';
import Home from '@/app/page';

describe('Home page testing', () => {
  test('should render principal page', () => {
    render(<Home />);
  });
});
