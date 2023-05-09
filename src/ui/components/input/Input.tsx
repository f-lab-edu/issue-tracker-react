import { forwardRef, Ref, InputHTMLAttributes } from 'react';
import { textStyle } from '@ui/components/input/input.css.ts';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: Ref<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ name, className, ...props }, ref) => (
  <input type="text" name={name} className={`${textStyle.input} ${className}`} ref={ref} {...props} />
));

export default Input;
