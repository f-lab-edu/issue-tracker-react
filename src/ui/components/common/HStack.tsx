import { HTMLAttributes, PropsWithChildren } from 'react';
import { hStackStyle } from '@ui/components/common/common.css';

type Props = HTMLAttributes<HTMLDivElement>;

const HStack = ({ children, className, ...props }: PropsWithChildren<Props>) => (
  <div className={`${hStackStyle.container} ${className}`} {...props}>
    {children}
  </div>
);

export default HStack;
