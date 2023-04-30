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
  blue: {
    '100': '#e6f7ff',
    '200': '#bae7ff',
    '300': '#91d5ff',
    '400': '#6bc1ff',
    '500': '#42aaff',
    '600': '#1890ff',
    '700': '#096dd9',
    '800': '#0050b3',
    '900': '#003a8c',
    '1000': '#002766',
  },
  gray: {
    '100': '#f7f9fb',
    '200': '#eef2f7',
    '300': '#e3e8ef',
    '400': '#cdd5df',
    '500': '#a3aebf',
    '600': '#748094',
    '700': '#4c5567',
    '800': '#2f3747',
    '900': '#1b202b',
    '1000': '#171922',
  },
  red: {
    '100': '#fff1f0',
    '200': '#ffccc7',
    '300': '#ffa39e',
    '400': '#ff7875',
    '500': '#ff4d4f',
    '600': '#f5222d',
    '700': '#cf1322',
    '800': '#a8071a',
    '900': '#820014',
    '1000': '#5c0011',
  },
  orange: {
    '100': '#fff7e6',
    '200': '#ffe7ba',
    '300': '#ffd591',
    '400': '#ffc069',
    '500': '#ffa940',
    '600': '#fa8c16',
    '700': '#ee8548',
    '800': '#ad4e00',
    '900': '#873800',
    '1000': '#612500',
  },
  black: { '1000': '#000000' },
  white: { '1000': '#ffffff' },

  text: '#666',
  background: '#f2f3f6',
  border: '#cdd5df',
  primary: '#fa8c16',
  secondary: '#42aaff',
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
});

export default styleToken;
