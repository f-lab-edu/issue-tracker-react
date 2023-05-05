import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BaseButton } from '@ui/components/button';

describe('BaseButton', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    handleClick.mockReset();
    render(<BaseButton onClick={handleClick}>확인</BaseButton>);
  });

  it('버튼의 children 값을 확인합니다.', () => {
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('확인');
  });

  it('버튼 클릭 후 포커스를 확인합니다.', () => {
    const button = screen.getByRole('button');
    fireEvent.click(button);
    waitFor(() => {
      expect(button).toHaveFocus();
    });
  });

  it('버튼 클릭 후 onClick 함수가 실행되었는지 확인합니다.', () => {
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toBeCalled();
  });
});
