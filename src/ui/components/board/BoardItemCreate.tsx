import { ChangeEvent, useState } from 'react';
import { HStack, VStack } from '@ui/components/common';
import { BaseButton } from '@ui/components/button';
import styleToken from '@ui/core/styleToken.css';
import { Textarea } from '@ui/components/input';
import useFocusInput from '../../../lib/hooks/useFocusInput.tsx';

type Props = {
  onClose: () => void;
  onSubmit: (text: string) => void;
};
const BoardItemCreate = ({ onClose, onSubmit }: Props) => {
  const [text, setText] = useState('');
  const { ref, onFocus } = useFocusInput<HTMLTextAreaElement>();

  const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const resetText = () => {
    setText('');
  };

  const handleSubmit = () => {
    onSubmit(text);
    resetText();
    onFocus();
  };

  return (
    <VStack style={{ marginTop: styleToken.space[2] }}>
      <Textarea name="content" value={text} onChange={handleChangeText} placeholder="내용을 입력해주세요." ref={ref} />
      <HStack style={{ marginTop: styleToken.space[2] }}>
        <BaseButton onClick={onClose} color="default">
          취소
        </BaseButton>
        <BaseButton onClick={handleSubmit} color="primary">
          저장
        </BaseButton>
      </HStack>
    </VStack>
  );
};

export default BoardItemCreate;
