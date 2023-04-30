import { PropsWithChildren } from 'react';
import { badgeStyle } from '@ui/components/common/common.css';

type Props = {
  backgroundColor?: string;
  width?: string;
};
const Badge = ({ children, backgroundColor, width }: PropsWithChildren<Props>) => (
  <div
    className={badgeStyle.container}
    title={children as string}
    style={{
      backgroundColor,
      width,
    }}
  >
    {children}
  </div>
);

export default Badge;
