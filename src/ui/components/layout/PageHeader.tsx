import { pageHeaderStyle } from '@ui/components/layout/layout.css';
import LogoImage from '@/assets/images/logo.png';

const PageHeader = () => (
  <header className={pageHeaderStyle.container}>
    <img className={pageHeaderStyle.logo} src={LogoImage} alt="이슈 트래커 로고" />
  </header>
);

export default PageHeader;
