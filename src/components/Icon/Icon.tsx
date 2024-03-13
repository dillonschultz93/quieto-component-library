import './Icon.css';

import { ICONS } from './Icons';

export type IconProps = {
  size?: number;
  name: keyof typeof ICONS;
  onClick?: () => void;
};

const Icon: React.FC<IconProps> = ({ size, name, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
      data-testid="icon"
      {...props}
    >
      {ICONS[name].map((path, index) => (
        <path
          key={index}
          d={path}
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          transform={`scale(${size ? size / 24 : 24 / 24})`}
        />
      ))}
    </svg>
  );
};

export default Icon;
