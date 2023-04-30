import { PropsWithChildren } from 'react';
import { vStackStyle } from '@ui/components/common/common.css';

type Props = {
  className?: string;
  alignItems?: string;
  justifyContent?: string;
  margin?: string | number;
  padding?: string | number;
  height?: string | number;
  border?: string;
  backgroundColor?: string;
  [key: string]: any;
};

const VStack = ({ children, className, ...props }: PropsWithChildren<Props>) => (
  <div className={`${vStackStyle.container} ${className}`} style={props}>
    {children}
  </div>
);

export default VStack;
