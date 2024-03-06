import React, { FC } from 'react';
import Icon, { IconProps } from '../Icon';

const Example: FC<IconProps> = ({ size, name }) => {
  return <Icon size={size} name={name} />;
};

export default Example;
