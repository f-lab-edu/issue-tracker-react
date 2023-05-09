import React, { createContext, useState, useContext, useCallback, PropsWithChildren, ReactNode, cloneElement, isValidElement, ReactElement } from 'react';
import { Dialog } from '@ui/components/dialog';

export type DialogOption = {
  fullWidth?: boolean;
  enableBackdropClick?: boolean;
};

type DialogSubmitResult = unknown;

type DialogOpenFn = (children: ReactNode, option?: DialogOption) => Promise<DialogSubmitResult> | null;
export const DialogContext = createContext<DialogOpenFn | null>(null);

const defaultDialogOption = {
  enableBackdropClick: false,
  fullWidth: false,
};

type dialogState = {
  content: ReactNode;
  options: DialogOption;
  key: string;
  resolver: (value: unknown) => void;
};

export default function DialogProvider({ children }: PropsWithChildren) {
  const [dialogs, setDialogs] = useState<dialogState[]>([]);
  const [modalCounter, setModalCounter] = useState(0);

  const openDialog: DialogOpenFn = useCallback((children, option) => {
    if (React.isValidElement(children)) {
      setModalCounter((prevModalCounter) => prevModalCounter + 1);
      const key = `modal-${modalCounter}`;

      setDialogs((prevDialogs) => [
        ...prevDialogs,
        {
          content: children,
          options: { ...defaultDialogOption, ...(option ?? {}) },
          key,
          resolver: () => {},
        },
      ]);

      return new Promise((resolve) => {
        setDialogs((prevDialogs) => prevDialogs.map((prevDialog) => (prevDialog.key === key ? { ...prevDialog, resolver: resolve } : prevDialog)));
      });
    }

    return null;
  }, []);

  const closeDialog = (key: string) => {
    setDialogs((prevDialogs) => prevDialogs.filter((modal) => modal.key !== key));
  };

  const submitDialog = (key: string, result: DialogSubmitResult) => {
    const targetDialog = dialogs.find((modal) => modal.key === key);
    if (targetDialog) {
      targetDialog.resolver(result);
      closeDialog(key);
    }
  };

  return (
    <>
      <DialogContext.Provider value={openDialog}>
        {children}
        {dialogs.map(({ content, options, key }, index) => {
          const isHidden = index < dialogs.length - 1;
          const dialogStyle = isHidden ? { display: 'none' } : {};
          return (
            <Dialog
              key={key}
              open
              onClose={() => closeDialog(key)}
              onSubmit={(result) => submitDialog(key, result)}
              enableBackdropClick={options.enableBackdropClick}
              style={dialogStyle}
            >
              {isValidElement(content) &&
                cloneElement(content as ReactElement, {
                  onClose: () => closeDialog(key),
                  onSubmit: (result: DialogSubmitResult) => submitDialog(key, result),
                })}
            </Dialog>
          );
        })}
      </DialogContext.Provider>
    </>
  );
}

export function useDialog() {
  const context = useContext(DialogContext);

  if (context === null) {
    throw new Error('useDialog를 사용하려면 DialogProvider를 상위에 제공해야 합니다.');
  }

  return context;
}
