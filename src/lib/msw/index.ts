import { setupWorker } from 'msw';

import handlers from '@lib/msw/api';

const initialWorker = async () => {
  try {
    if (typeof window !== 'undefined') {
      const mockApiHandler = handlers.map((handler) => handler());
      const worker = setupWorker(...mockApiHandler);
      await worker.start();
      return true;
    }
    return false;
  } catch (e) {
    console.error(`initMocks Error: ${e}`);
    return false;
  }
};

export default initialWorker;
