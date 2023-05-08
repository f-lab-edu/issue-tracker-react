import React, { createContext, useState, useRef, useContext, useCallback, PropsWithChildren, ReactNode, cloneElement, ReactElement } from 'react';
import { Dialog } from '@ui/components/dialog';

export type DialogOption = {
  fullWidth?: boolean;
  enableBackdropClick?: boolean;
};

type DialogSubmitResult = any;

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
  const modalCounter = useRef(0);

  const openDialog: DialogOpenFn = useCallback((children, option) => {
    if (React.isValidElement(children)) {
      modalCounter.current += 1;
      const key = `modal-${modalCounter.current}`;

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
        {dialogs.map(({ content, options, key }, index) => (
          <Dialog
            key={key}
            open
            onClose={() => closeDialog(key)}
            onSubmit={(result) => submitDialog(key, result)}
            enableBackdropClick={options.enableBackdropClick}
            style={index < dialogs.length - 1 ? { display: 'none' } : {}}
          >
            {content &&
              cloneElement(content as ReactElement, {
                onClose: () => closeDialog(key),
                onSubmit: (result: DialogSubmitResult) => submitDialog(key, result),
              })}
          </Dialog>
        ))}
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
