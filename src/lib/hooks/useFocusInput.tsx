import { useRef } from 'react';
import { useEffectOnce } from '@lib/hooks/index.ts';

const useFocusInput = <T extends HTMLInputElement | HTMLTextAreaElement>() => {
  const inputRef = useRef<T>(null);
  const onFocusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffectOnce(onFocusInput);

  return {
    ref: inputRef,
    onFocus: onFocusInput,
  };
};

export default useFocusInput;
