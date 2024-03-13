import './Chip.css';
import { Icon } from '../Icon';

export type ChipProps = {
  children: React.ReactNode;
  onClick?: () => void;
  isDismissable?: boolean;
};

const Chip: React.FC<ChipProps> = ({ children, onClick, isDismissable }) => {
  return (
    <div className="chip" data-testid="chip">
      <span>{children}</span>
      {isDismissable && <Icon name="x" size={8} onClick={onClick} />}
    </div>
  );
};

export default Chip;
