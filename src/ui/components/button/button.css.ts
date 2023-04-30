import { style } from '@vanilla-extract/css';
import styleToken from '@ui/core/styleToken.css';

const button = style({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  border: 'none',
  cursor: 'pointer',
  outline: 'none',
});

const iconButton = style([
  button,
  {
    background: 'none',
  },
]);

const baseButton = style([
  button,
  {
    height: '32px',
    borderRadius: '4px',
    background: styleToken.color.gray['100'],
    selectors: {
      '& + &': {
        marginLeft: '8px',
      },
    },
  },
]);

export const iconButtonStyle = {
  container: iconButton,
};

export const baseButtonStyle = {
  container: baseButton,
};
