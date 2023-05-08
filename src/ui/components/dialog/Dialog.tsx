import React, { cloneElement, PropsWithChildren, ReactElement } from 'react';
import { dialogStyle } from '@ui/components/dialog/dialog.css.ts';

interface DialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (result: any) => void;
  enableBackdropClick?: boolean;
  style?: React.CSSProperties;
}

const Dialog = ({ open, onClose, onSubmit, enableBackdropClick, style, children }: DialogProps & PropsWithChildren) => {
  const handleBackdropClick = () => {
    if (enableBackdropClick) {
      onClose();
    }
  };
  return open ? (
    <div className={dialogStyle.backdrop} onClick={handleBackdropClick} style={style}>
      <div className={dialogStyle.container} onClick={(e) => e.stopPropagation()}>
        {children &&
          cloneElement(children as ReactElement, {
            onClose,
            onSubmit,
          })}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Dialog;
