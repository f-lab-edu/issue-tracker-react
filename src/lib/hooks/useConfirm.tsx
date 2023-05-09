import { DialogOption, useDialog } from '@ui/components/dialog/DialogProvider';
import Alert from '@ui/components/dialog/Alert.tsx';

const useConfirm = () => {
  const dialog = useDialog();
  const showConfirm = async (content: string, options: DialogOption) => {
    const result = await dialog(<Alert type="confirm" content={content} />, options);
    return result;
  };

  return showConfirm;
};

export default useConfirm;
