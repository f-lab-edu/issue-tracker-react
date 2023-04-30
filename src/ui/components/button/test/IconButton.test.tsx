import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { IconButton } from '@ui/components/button';

describe('IconButton', () => {
  jest.mock('@ui/core/styleToken.css', () => ({
    color: {
      primary: '#000',
      secondary: '#000',
      gray: {
        300: '#000',
      },
      white: {
        1000: '#000',
      },
      black: {
        1000: '#000',
      },
    },
  }));

  jest.mock('@ui/components/button/button.css', () => ({
    iconButtonStyle: {
      container: 'iconButtonStyle.container',
    },
  }));

  const onClick = jest.fn();

  beforeEach(() => {
    render(<IconButton onClick={onClick} icon="add" />);
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
      expect(onClick).toBeCalled();
    });
  });
});
