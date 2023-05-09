import { DialogOption, useDialog } from '@ui/components/dialog/DialogProvider';
import { Alert } from '@ui/components/dialog';

const useAlert = () => {
  const dialog = useDialog();
  const showAlert = async (content: string, options?: DialogOption) => {
    const result = await dialog(<Alert type="alert" content={content} />, options);
    return result;
  };

  return showAlert;
};

export default useAlert;
