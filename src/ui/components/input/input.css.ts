import { style } from '@vanilla-extract/css';
import styleToken from '@ui/core/styleToken.css';

const textarea = style({
  width: '100%',
  minHeight: '64px',
  maxHeight: '256px',
  border: `1px solid ${styleToken.color.border}`,
  borderRadius: styleToken.space[1],
  padding: styleToken.space[2],
  resize: 'vertical',
  selectors: {
    '&:focus': {
      outline: 'none',
    },
  },
});

const input = style({
  width: '100%',
  minHeight: '40px',
  border: `1px solid ${styleToken.color.border}`,
  borderRadius: styleToken.space[1],
  padding: styleToken.space[2],
  selectors: {
    '&:focus': {
      outline: 'none',
    },
  },
});

export const textStyle = {
  textarea,
  input,
};
