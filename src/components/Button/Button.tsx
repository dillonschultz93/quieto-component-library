import { MouseEventHandler } from 'react';
import './Button.css';

import { Icon } from '../Icon';
import { ICONS } from '../Icon/Icons';

export type ButtonProps = {
  kind?: 'primary' | 'neutral' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  hasIcon?: boolean;
  icon?: keyof typeof ICONS;
  disabled?: boolean;
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({
  kind = 'neutral',
  size = 'large',
  hasIcon,
  icon,
  disabled,
  children,
  onClick,
  ...props
}) => {
  return (
    <button
      className={`button ${kind} ${size}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
      data-testid="button"
    >
      {hasIcon && icon ? <Icon name={icon} size={20} /> : null}
      {children}
    </button>
  );
};

export default Button;
