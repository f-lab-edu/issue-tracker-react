import { render, waitFor } from '@testing-library/react';
import { VStack } from '@/ui/components/common';

describe('VStack', () => {
  it('children 값을 확인 합니다.', () => {
    const { container } = render(<VStack>VStack 테스트</VStack>);
    waitFor(() => {
      expect(container).toHaveTextContent('VStack 테스트');
    });
  });

  it('flexDirection Style을 확인합니다.', () => {
    const { container } = render(<VStack />);
    waitFor(() => {
      expect(container.firstChild).toHaveStyle({
        flexDirection: 'column',
      });
    });
  });
});
