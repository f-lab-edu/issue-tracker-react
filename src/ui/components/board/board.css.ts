import { style } from '@vanilla-extract/css';
import styleToken from '@ui/core/styleToken.css';

const boardTitleCount = style({
  marginLeft: styleToken.space[2],
  fontSize: styleToken.fontSize[1],
});

const boardItemContainer = style({
  minHeight: '64px',
  padding: styleToken.space[2],
  backgroundColor: styleToken.color.white,
  borderRadius: styleToken.space[1],
  cursor: 'grab',
  selectors: {
    '& + &': {
      marginTop: styleToken.space[2],
    },
  },
});

const boardItemContent = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  color: styleToken.color.text,
  fontSize: styleToken.fontSize[1],
  marginTop: styleToken.space[0],
});

const boardItemAuthor = style({
  fontWeight: 700,
  color: styleToken.color.black['1000'],
  marginLeft: styleToken.space[1],
});

const boardColumnCreateContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '280px',
  height: '64px',
  marginTop: '34px',
  padding: 0,
  backgroundColor: styleToken.color.white,
  border: `1px dashed ${styleToken.color.black}`,
  borderRadius: styleToken.space[1],
  cursor: 'pointer',
  flex: 'unset',
  selectors: {
    '&:hover': {
      backgroundColor: styleToken.color.orange100,
    },
  },
});

const boardColumnCreateText = style({
  fontSize: styleToken.fontSize[2],
  marginTop: styleToken.space[0],
  marginLeft: styleToken.space[1],
});

export const boardTitleStyle = {
  count: boardTitleCount,
};

export const boardItemStyle = {
  container: boardItemContainer,
  content: boardItemContent,
  author: boardItemAuthor,
};

export const boardColumnCreateStyle = {
  container: boardColumnCreateContainer,
  text: boardColumnCreateText,
};
