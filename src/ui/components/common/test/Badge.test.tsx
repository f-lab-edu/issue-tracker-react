import { render } from '@testing-library/react';
import { Badge } from '@ui/components/common';

describe('Badge', () => {
  it('children 값을 확인 합니다.', () => {
    const { container } = render(<Badge>할 일</Badge>);
    expect(container).toHaveTextContent('할 일');
  });

  it('width 값을 변경하고 확인 합니다.', () => {
    const { container } = render(<Badge width="200px">할 일</Badge>);
    expect(container.firstChild).toHaveStyle('width: 200px');
  });

  it('backgroundColor 값을 변경하고 확인 합니다.', () => {
    const { container } = render(<Badge backgroundColor="red">할 일</Badge>);
    expect(container.firstChild).toHaveStyle('background-color: red');
  });
});
