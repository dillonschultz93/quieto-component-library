/* eslint-disable react/prop-types */
import { MouseEventHandler } from 'react';

export type ButtonProps = {
  kind?: 'primary' | 'neutral' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  hasIcon?: boolean;
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({
  kind = 'neutral',
  size,
  hasIcon,
  children,
  onClick,
}) => {
  return (
    <button className={`button ${kind} ${size}`} onClick={onClick}>
      {hasIcon && <span className="icon" />}
      {children}
    </button>
  );
};

export default Button;
