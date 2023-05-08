import { PropsWithChildren } from 'react';
import { BaseButton } from '@ui/components/button';
import { HStack, VStack } from '@ui/components/common';
import { modalStyle } from '@ui/components/dialog/dialog.css.ts';

const Container = ({ children }: PropsWithChildren) => <VStack className={modalStyle.container}>{children}</VStack>;

const Header = ({ children }: PropsWithChildren) => <HStack className={modalStyle.header}>{children}</HStack>;

const Body = ({ children }: PropsWithChildren) => <VStack className={modalStyle.content}>{children}</VStack>;

type ButtonClickFn = () => void;
const Footer = ({ onClose, onSubmit, isEdit }: { onClose?: ButtonClickFn; onSubmit?: ButtonClickFn; isEdit: boolean }) => (
  <HStack className={modalStyle.footer}>
    {onClose && (
      <BaseButton className={modalStyle.button} color="default" onClick={onClose}>
        취소
      </BaseButton>
    )}
    {onSubmit && (
      <BaseButton className={modalStyle.button} onClick={onSubmit}>
        {isEdit ? '수정' : '저장'}
      </BaseButton>
    )}
  </HStack>
);

const Modal = {
  Container,
  Header,
  Body,
  Footer,
};

export default Modal;
