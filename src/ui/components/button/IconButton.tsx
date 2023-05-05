import { MdAdd, MdClear } from 'react-icons/md';
import { CSSProperties, HTMLAttributes } from 'react';
import { iconButtonStyle } from '@ui/components/button/button.css';

const iconImages = {
  add: <MdAdd size={22} />,
  close: <MdClear size={20} />,
};

type IconButtonProps = {
  icon: 'add' | 'close';
  className?: string;
  onClick: () => void;
  style?: CSSProperties;
};

type Props = IconButtonProps & HTMLAttributes<HTMLButtonElement>;

const IconButton = ({ icon, className, onClick, style }: Props) => (
  <button type="button" className={`${iconButtonStyle.container} ${className}`} onClick={onClick} style={style}>
    {iconImages[icon]}
  </button>
);

export default IconButton;
