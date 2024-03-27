import React, { FC } from 'react';
import Chip, { ChipProps } from '../Chip';

const Example: FC<ChipProps> = ({
  children,
  isDismissible,
  isToggleable,
  onClick,
}) => {
  return (
    <Chip
      isDismissible={isDismissible}
      onClick={onClick}
      isToggleable={isToggleable}
    >
      {children}
    </Chip>
  );
};

export default Example;
