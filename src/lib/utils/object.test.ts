import { isObjectEmpty } from '@lib/utils/object';

test('isObjectEmpty를 테스트 합니다.', () => {
  expect(isObjectEmpty(undefined)).toBe(true);
  expect(isObjectEmpty(null)).toBe(true);
  expect(isObjectEmpty({})).toBe(true);
  expect(isObjectEmpty({ a: 1 })).toBe(false);
});
