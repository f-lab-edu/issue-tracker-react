import React from 'react';
import { textareaStyle } from '@ui/components/input/input.css';

type Props = {
  name: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
};

const Textarea = ({ name, className, onChange, value, placeholder, maxLength = 10, disabled }: Props) => (
  <textarea
    name={name}
    className={`${textareaStyle.container} ${className}`}
    onChange={onChange}
    value={value}
    placeholder={placeholder}
    maxLength={maxLength}
    disabled={disabled}
  />
);

export default Textarea;
