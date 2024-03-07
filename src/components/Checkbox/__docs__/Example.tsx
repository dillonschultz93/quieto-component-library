import React, { FC, useState } from 'react';
import Checkbox, { CheckboxProps } from '../Checkbox';

const Example: FC<CheckboxProps> = ({ label, checked, value, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleOnChange = () => {
    console.log('Checkbox clicked');
    setIsChecked(!isChecked);
  };

  return (
    <Checkbox
      label={label}
      value={value}
      checked={isChecked}
      onChange={handleOnChange || onChange}
    />
  );
};

export default Example;
