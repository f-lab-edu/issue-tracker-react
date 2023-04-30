import { PropsWithChildren } from 'react';
import { pageBodyStyle } from './layout.css';

const PageBody = ({ children }: PropsWithChildren) => <main className={pageBodyStyle.container}>{children}</main>;

export default PageBody;
