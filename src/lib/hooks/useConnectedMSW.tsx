import { useEffect, useState } from 'react';

import initialWorker from '@lib/msw';

const useConnectedMSW = () => {
  const [isConnectedMSW, setIsConnectedMSW] = useState(false);

  useEffect(() => {
    (async () => {
      const responseWorker = await initialWorker();
      setIsConnectedMSW(responseWorker);
    })();
  }, []);

  return isConnectedMSW;
};

export default useConnectedMSW;
