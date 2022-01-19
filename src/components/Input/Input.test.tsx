import { render } from '@testing-library/react';

describe('<Input />', () => {
  it('should render correctly', () => {
    const { container } = render(<input />);

    expect(container).toMatchSnapshot();
  });
});
