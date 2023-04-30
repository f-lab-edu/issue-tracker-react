import { MdAdd, MdClear } from 'react-icons/md';
import { CSSProperties } from 'react';
import { iconButtonStyle } from '@ui/components/button/button.css';

const iconImages = {
  add: <MdAdd size={22} />,
  close: <MdClear size={20} />,
};

type Props = {
  icon: keyof typeof iconImages;
  className?: string;
  onClick: () => void;
  style?: CSSProperties;
};

const IconButton = ({ icon, className, onClick, style }: Props) => (
  <button type="button" className={`${iconButtonStyle.container} ${className}`} onClick={onClick} style={style}>
    {iconImages[icon]}
  </button>
);

export default IconButton;
