import { style } from '@vanilla-extract/css';
import styleToken from '@ui/core/styleToken.css';

const pageLayout = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  minWidth: '1600px',
});

const pageHeaderContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: styleToken.size.headerHeight,
  padding: '0 48px',
  backgroundColor: styleToken.color.orange700,
});

const pageHeaderLogo = style({
  height: '100%',
  width: 'auto',
});

const pageBody = style({
  display: 'flex',
  flexDirection: 'column',
  height: styleToken.size.bodyHeight,
  padding: 64,
  backgroundColor: styleToken.color.background,
});

export const pageLayoutStyle = {
  container: pageLayout,
};

export const pageHeaderStyle = {
  container: pageHeaderContainer,
  logo: pageHeaderLogo,
};

export const pageBodyStyle = {
  container: pageBody,
};
