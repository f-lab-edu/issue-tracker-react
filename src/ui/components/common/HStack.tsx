import { PropsWithChildren } from 'react';
import { hStackStyle } from '@ui/components/common/common.css';

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

const HStack = ({ children, className, ...props }: PropsWithChildren<Props>) => (
  <div className={`${hStackStyle.container} ${className}`} style={props}>
    {children}
  </div>
);

export default HStack;
