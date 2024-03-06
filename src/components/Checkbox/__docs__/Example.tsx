import React, { FC, useState } from 'react';
import Checkbox, { CheckboxProps } from '../Checkbox';

const Example: FC<CheckboxProps> = ({ label, checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Checkbox
      label={label}
      checked={isChecked || checked}
      onChange={handleOnChange || onChange}
    />
  );
};

export default Example;
