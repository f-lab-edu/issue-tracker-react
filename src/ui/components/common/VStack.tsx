import { HTMLAttributes, PropsWithChildren } from 'react';
import { vStackStyle } from '@ui/components/common/common.css';

type Props = HTMLAttributes<HTMLDivElement>;

const VStack = ({ children, className, ...props }: PropsWithChildren<Props>) => (
  <div className={`${vStackStyle.container} ${className}`} {...props}>
    {children}
  </div>
);

export default VStack;
