import { render, screen } from '@testing-library/react';
import { FaSearch } from 'react-icons/fa';
import Button from './Button';

describe('<Button />', () => {
  it('should render', () => {
    const { container } = render(<Button><FaSearch /></Button>);
    expect(screen.getByRole('button', {
      name: /search/i,
    })).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
