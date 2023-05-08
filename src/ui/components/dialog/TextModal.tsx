import { ChangeEvent, RefObject, useRef, useState } from 'react';
import { IconButton } from '@ui/components/button';
import { Input, Textarea } from '@ui/components/input';
import { useAlert, useEffectOnce } from '@lib/hooks';
import { Modal } from '@ui/components/dialog';

type Props = {
  title: string;
  type: 'input' | 'textarea';
  value?: string;
  onSubmit?: (value: any) => void;
  onClose?: () => void;
};

const TextModal = ({ title, type = 'input', value = '', onSubmit, onClose }: Props) => {
  const showAlert = useAlert();
  const [content, setContent] = useState('');
  const textRef = useRef<HTMLTextAreaElement | HTMLInputElement>(null);

  const handleSubmit = async () => {
    if (onSubmit) {
      if (content.trim() === '') {
        await showAlert('내용을 입력해주세요.', { enableBackdropClick: true });
        return;
      }
      onSubmit(content);
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setContent(e.currentTarget.value);
  };

  const handleTextareaFoucs = () => {
    if (textRef.current) {
      textRef.current.focus();
      textRef.current.value = value;
      setContent(value);
    }
  };

  const TextInput = <Input name="content" onChange={handleChange} value={content} ref={textRef as RefObject<HTMLInputElement>} />;

  const TextareaInput = <Textarea name="name" onChange={handleChange} value={content} style={{ resize: 'none' }} ref={textRef as RefObject<HTMLTextAreaElement>} />;

  const TextComponent = type === 'input' ? TextInput : TextareaInput;

  useEffectOnce(handleTextareaFoucs);

  return (
    <Modal.Container>
      <Modal.Header>
        <h3>{title}</h3>
        <IconButton icon="close" style={{ flex: 'unset' }} onClick={handleClose} />
      </Modal.Header>
      <Modal.Body>{TextComponent}</Modal.Body>
      <Modal.Footer isEdit={Boolean(value)} onClose={handleClose} onSubmit={handleSubmit} />
    </Modal.Container>
  );
};

export default TextModal;
