import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { IconButton } from '@ui/components/button';

describe('IconButton', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    handleClick.mockReset();
    render(<IconButton onClick={handleClick} icon="add" />);
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
    waitFor(() => {
      expect(handleClick).toBeCalled();
    });
  });
});
