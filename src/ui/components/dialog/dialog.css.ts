import { style } from '@vanilla-extract/css';
import styleToken from '@ui/core/styleToken.css.ts';

const dialogBackdropStyle = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
});

const dialogContainerStyle = style({
  backgroundColor: 'white',
  borderRadius: 5,
  width: 'auto',
  maxWidth: '500px',
  position: 'relative',
});

const alertContainerStyle = style({
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '310px',
  height: 'auto',
  backgroundColor: styleToken.color.white,
  borderRadius: '10px',
  padding: '38px 40px 20px 40px',
});

const alertContentStyle = style({
  alignItems: 'center',
  fontSize: styleToken.fontSize[1],
  color: styleToken.color.gray900,
  textAlign: 'center',
  lineHeight: '1.5',
});

const alertFooterStyle = style({
  marginTop: '28px',
  width: '100%',
});

const modalContainerStyle = style({
  width: '360px',
  height: 'auto',
  backgroundColor: styleToken.color.white,
  borderRadius: '10px',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '24px 26px 20px 26px',
});

const modalHeaderStyle = style({
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  width: '100%',
  height: '50px',
});

const modalContentStyle = style({
  width: '100%',
  height: 'auto',
});

const modalFooterStyle = style({
  width: '100%',
  height: '32px',
  marginTop: '28px',
  justifyContent: 'flex-end',
});

const modalButtonStyle = style({
  width: '100px !important',
  flex: 'unset !important',
});

export const dialogStyle = {
  backdrop: dialogBackdropStyle,
  container: dialogContainerStyle,
};

export const alertStyle = {
  container: alertContainerStyle,
  content: alertContentStyle,
  footer: alertFooterStyle,
};

export const modalStyle = {
  container: modalContainerStyle,
  header: modalHeaderStyle,
  content: modalContentStyle,
  footer: modalFooterStyle,
  button: modalButtonStyle,
};
