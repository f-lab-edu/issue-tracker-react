import { render, waitFor } from '@testing-library/react';
import { HStack } from '@/ui/components/common';

describe('HStack', () => {
  it('children 값을 확인 합니다.', () => {
    const { container } = render(<HStack>HStack 테스트</HStack>);
    expect(container).toHaveTextContent('HStack 테스트');
  });

  it('flexDirection Style을 확인합니다.', () => {
    const { container } = render(<HStack />);
    waitFor(() => {
      expect(container.firstChild).toHaveStyle({
        flexDirection: 'row',
      });
    });
  });
});
