import { render, screen } from '@testing-library/react';

import App from './App';

test('App 컴포넌트를 테스트합니다.', () => {
  render(<App />);
  const element = screen.getByText(/이슈 트래커 리액트/i);
  expect(element).toBeInTheDocument();
});
