import { ChangeEventHandler } from 'react';
import Icon from '../Icon/Icon';
import './Checkbox.css';

export type CheckboxProps = {
  label: string;
  value: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  value,
  onChange,
}) => {
  return (
    <label className="checkbox" data-testid="checkbox">
      {checked ? <Icon name="check" size={14} /> : null}
      <input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

export default Checkbox;
