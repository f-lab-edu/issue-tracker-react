import { render, waitFor } from '@testing-library/react';
import { BoardColumnCreate } from '@ui/components/board';

describe('BoardColumnCreate', () => {
  const handleClick = jest.fn();

  const { container } = render(<BoardColumnCreate onClick={handleClick} />);

  it('버튼 클릭 후 onClick 함수가 실행되었는지 확인합니다.', () => {
    const button = container.querySelector('button');
    button?.click();
    waitFor(() => {
      expect(handleClick).toBeCalled();
    });
  });
});
