import React, { FC } from 'react';
import Chip, { ChipProps } from '../Chip';

const Example: FC<ChipProps> = ({ children, isDismissable, onClick }) => {
  return (
    <Chip isDismissable={isDismissable} onClick={onClick}>
      {children}
    </Chip>
  );
};

export default Example;
