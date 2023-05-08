import { BaseButton } from '@ui/components/button';
import { HStack, VStack } from '@ui/components/common';
import { alertStyle } from '@ui/components/dialog/dialog.css.ts';

type Props = {
  onSubmit?: (value: any) => void;
  onClose?: () => void;
  content: string;
  type: 'alert' | 'confirm';
};

const Alert = ({ onSubmit, onClose, content, type }: Props) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(true);
    }
  };

  return (
    <VStack className={alertStyle.container}>
      <VStack className={alertStyle.content}>{content}</VStack>
      <HStack className={alertStyle.footer}>
        {type === 'confirm' && (
          <BaseButton color="default" onClick={handleClose}>
            취소
          </BaseButton>
        )}
        <BaseButton color="primary" onClick={handleSubmit}>
          확인
        </BaseButton>
      </HStack>
    </VStack>
  );
};

export default Alert;
