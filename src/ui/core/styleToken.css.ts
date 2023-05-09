import { createGlobalTheme } from '@vanilla-extract/css';

const FONT_SIZE_PROPERTIES = {
  0: '12px',
  1: '14px',
  2: '16px',
  3: '20px',
  4: '24px',
  5: '32px',
  6: '48px',
  7: '64px',
  8: '96px',
};

const SPACE_PROPERTIES = {
  0: '2px',
  1: '4px',
  2: '8px',
  3: '16px',
  4: '24px',
  5: '32px',
  6: '48px',
  7: '64px',
  8: '96px',
  9: '128px',
  10: '192px',
  11: '256px',
  12: '512px',
};

const COLOR_PROPERTIES = {
  blue100: '#e6f7ff',
  blue200: '#bae7ff',
  blue300: '#91d5ff',
  blue400: '#6bc1ff',
  blue500: '#42aaff',
  blue600: '#1890ff',
  blue700: '#096dd9',
  blue800: '#0050b3',
  blue900: '#003a8c',
  blue1000: '#002766',
  gray100: '#f7f9fb',
  gray200: '#eef2f7',
  gray300: '#e3e8ef',
  gray400: '#cdd5df',
  gray500: '#a3aebf',
  gray600: '#748094',
  gray700: '#4c5567',
  gray800: '#2f3747',
  gray900: '#1b202b',
  gray1000: '#171922',
  red100: '#fff1f0',
  red200: '#ffccc7',
  red300: '#ffa39e',
  red400: '#ff7875',
  red500: '#ff4d4f',
  red600: '#f5222d',
  red700: '#cf1322',
  red800: '#a8071a',
  red900: '#820014',
  red1000: '#5c0011',
  orange100: '#fff7e6',
  orange200: '#ffe7ba',
  orange300: '#ffd591',
  orange400: '#ffc069',
  orange500: '#ffa940',
  orange600: '#fa8c16',
  orange700: '#ee8548',
  orange800: '#ad4e00',
  orange900: '#873800',
  orange1000: '#612500',
  black: '#000000',
  white: '#ffffff',

  text: '#666',
  background: '#f2f3f6',
  border: '#cdd5df',
  primary: '#fa8c16',
  secondary: '#42aaff',
};

const Z_INDEX_PROPERTIES = {
  modal: '1000',
};

const headerHeight = 80;
const SIZE_PROPERTIES = {
  headerHeight: `${headerHeight}px`,
  bodyHeight: `calc(100vh - ${headerHeight}px)`,
};

const styleToken = createGlobalTheme(':root', {
  fontSize: FONT_SIZE_PROPERTIES,
  space: SPACE_PROPERTIES,
  size: SIZE_PROPERTIES,
  color: COLOR_PROPERTIES,
  zIndex: Z_INDEX_PROPERTIES,
});

export default styleToken;
