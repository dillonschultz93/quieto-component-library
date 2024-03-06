import './Icon.css';

import { ICONS } from './Icons';

export type IconProps = {
  size?: number;
  name: keyof typeof ICONS;
};

const Icon: React.FC<IconProps> = ({ size, name }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {ICONS[name].map((path, index) => (
        <path
          key={index}
          d={path}
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      ))}
    </svg>
  );
};

export default Icon;
