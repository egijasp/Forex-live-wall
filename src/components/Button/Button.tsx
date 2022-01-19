import { FC, ReactNode } from 'react';
import './Button.scss';

type ButtonProps = {
    children: ReactNode,
}

const Button: FC<ButtonProps> = ({ children }) => (
  <button
    aria-label="search"
    className="button"
    type="submit"
  >
    {children}
  </button>
);

export default Button;
