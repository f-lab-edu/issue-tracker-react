import { forwardRef, Ref, TextareaHTMLAttributes } from 'react';
import { textStyle } from '@ui/components/input/input.css.ts';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  ref?: Ref<HTMLTextAreaElement>;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ name, className, maxLength = 10, ...props }, ref) => (
  <textarea name={name} className={`${textStyle.textarea} ${className}`} maxLength={maxLength} ref={ref} {...props} />
));

export default Textarea;
