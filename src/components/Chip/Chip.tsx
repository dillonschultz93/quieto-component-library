import './Chip.css';
import { Icon } from '../Icon';

export type ChipProps = {
  children: React.ReactNode;
  onClick?: () => void;
  onChange?: () => void;
  isDismissible?: boolean;
  isToggleable?: boolean;
};

const Chip: React.FC<ChipProps> = ({
  children,
  onClick,
  onChange,
  isDismissible,
  isToggleable,
}) => {
  if (isToggleable) {
    return (
      <label className="chip toggleable" data-testid="chip">
        {children}
        <input type="checkbox" onChange={onChange} />
      </label>
    );
  } else {
    return (
      <div className="chip" data-testid="chip">
        <span>{children}</span>
        {isDismissible && <Icon name="x" size={10} onClick={onClick} />}
      </div>
    );
  }
};

export default Chip;
