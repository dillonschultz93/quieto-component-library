import React, { FC } from 'react';
import Button, { ButtonProps } from '../Button';

const Example: FC<ButtonProps> = ({
  kind,
  size,
  icon,
  children,
  onClick,
  disabled,
  hasIcon,
}) => {
  return (
    <Button
      kind={kind}
      size={size}
      hasIcon={hasIcon}
      icon={icon}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default Example;
