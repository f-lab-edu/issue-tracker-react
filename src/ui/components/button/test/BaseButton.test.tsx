import { fireEvent, render, screen } from '@testing-library/react';
import { BaseButton } from '@ui/components/button';

describe('BaseButton', () => {
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
    baseButtonStyle: {
      container: 'baseButtonStyle.container',
    },
  }));

  const onClick = jest.fn();

  beforeEach(() => {
    render(<BaseButton onClick={onClick}>확인</BaseButton>);
  });

  it('버튼의 children 값을 확인합니다.', () => {
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('확인');
  });

  it('버튼 클릭 후 포커스를 확인합니다.', () => {
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(button).toHaveFocus();
  });

  it('버튼 클릭 후 onClick 함수가 실행되었는지 확인합니다.', () => {
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(onClick).toBeCalled();
  });
});
