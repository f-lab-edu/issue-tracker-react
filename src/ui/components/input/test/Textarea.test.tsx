import { fireEvent, render } from '@testing-library/react';
import { Textarea } from '@ui/components/input';

const handleChange = jest.fn();

describe('Textarea', () => {
  it('값 변경을 확인 합니다.', () => {
    const { container, rerender } = render(<Textarea name="content" value="" onChange={handleChange} placeholder="내용을 입력해주세요." />);
    const textarea = container.querySelector('[name="content"]');
    if (!textarea) {
      fail('textarea가 존재하지 않습니다.');
    }
    const value = 'Textarea 값입니다.';
    fireEvent.change(textarea, { target: { value } });
    rerender(<Textarea name="content" value={value} onChange={handleChange} placeholder="내용을 입력해주세요." />);
    expect(handleChange).toBeCalledTimes(1);
    const [event] = handleChange.mock.calls[0];
    expect(event.target.value).toBe(value);
  });

  it('placeholder를 확인 합니다.', () => {
    const placeholder = 'Textarea placeholder 값 입니다.';
    const { container } = render(<Textarea name="content" value="" onChange={handleChange} placeholder={placeholder} />);
    const textarea = container.querySelector('[name="content"]');
    if (!textarea) {
      fail('textarea가 존재하지 않습니다.');
    }
    expect(textarea.getAttribute('placeholder')).toBe(placeholder);
  });

  it('disabled를 확인 합니다.', () => {
    const { container } = render(<Textarea name="content" value="" onChange={handleChange} placeholder="내용을 입력해주세요." disabled />);
    const textarea = container.querySelector('[name="content"]');
    if (!textarea) {
      fail('textarea가 존재하지 않습니다.');
    }
    expect(textarea.getAttribute('disabled')).toBe('');
  });
});
