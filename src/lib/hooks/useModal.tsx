import { ReactElement } from 'react';
import { DialogOption, useDialog } from '@ui/components/dialog/DialogProvider';

const useModal = () => {
  const dialog = useDialog();
  const showModal = async (component: ReactElement, options?: DialogOption) => {
    const result = await dialog(component, options);
    return result;
  };

  return showModal;
};

export default useModal;
