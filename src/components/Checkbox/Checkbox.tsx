import { ChangeEventHandler } from 'react';
import './Checkbox.css';

export type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <label className="checkbox" data-testid="checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </label>
  );
};

export default Checkbox;
