import React, {
  ChangeEvent,
  FC, useEffect, useRef,
} from 'react';
import './Input.scss';

type InputProps = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    value: string,
    type: string,
    placeholder: string,
}

const Input:FC<InputProps> = ({
  type, placeholder, value, onChange,
}) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  return (
    <input
      className="input"
      ref={searchInputRef}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
