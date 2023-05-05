import { PropsWithChildren } from 'react';
import { badgeStyle } from '@ui/components/common/common.css';

type Props = {
  backgroundColor?: string;
  width?: string;
};
const Badge = ({ children, backgroundColor, width }: PropsWithChildren<Props>) => (
  <span
    className={badgeStyle.container}
    title={children as string}
    style={{
      backgroundColor,
      width,
    }}
  >
    {children}
  </span>
);

export default Badge;
