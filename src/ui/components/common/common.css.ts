import { style } from '@vanilla-extract/css';
import styleToken from '@ui/core/styleToken.css';

const stack = style({
  display: 'flex',
});

const hStack = style([
  stack,
  {
    flexDirection: 'row',
  },
]);

const vStack = style([
  stack,
  {
    flexDirection: 'column',
  },
]);

const badge = style({
  display: 'block',
  minWidth: '40px',
  maxWidth: '200px',
  width: 'auto',
  height: '26px',
  alignItems: 'center',
  backgroundColor: styleToken.color.orange300,
  padding: '6px 10px',
  borderRadius: '8px',
  color: styleToken.color.text,
  fontSize: styleToken.fontSize[1],
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
});

export const hStackStyle = {
  container: hStack,
};

export const vStackStyle = {
  container: vStack,
};

export const badgeStyle = {
  container: badge,
};
