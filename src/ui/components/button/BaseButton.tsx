import { HTMLAttributes, PropsWithChildren } from 'react';
import { baseButtonStyle } from '@ui/components/button/button.css';
import styleToken from '@ui/core/styleToken.css';

const backgroundColorStyle = {
  primary: styleToken.color.primary,
  secondary: styleToken.color.secondary,
  default: styleToken.color.gray['300'],
};

const fontColorStyle = {
  primary: styleToken.color.white['1000'],
  secondary: styleToken.color.white['1000'],
  default: styleToken.color.black['1000'],
};

type ButtonColor = 'primary' | 'secondary' | 'default';

type ButtonProps = {
  className?: string;
  color?: ButtonColor;
  onClick: () => void;
};

type Props = ButtonProps & HTMLAttributes<HTMLButtonElement>;

const BaseButton = ({ children, className, color = 'primary', onClick, ...props }: PropsWithChildren<Props>) => (
  <button
    type="button"
    className={`${baseButtonStyle.container} ${className}`}
    onClick={onClick}
    style={{
      color: fontColorStyle[color] as string,
      backgroundColor: backgroundColorStyle[color] as string,
      ...props,
    }}
  >
    {children}
  </button>
);

export default BaseButton;
