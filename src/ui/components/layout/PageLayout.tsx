import { PropsWithChildren } from 'react';
import { pageLayoutStyle } from '@ui/components/layout/layout.css';

const PageLayout = ({ children }: PropsWithChildren) => <div className={pageLayoutStyle.container}>{children}</div>;

export default PageLayout;
