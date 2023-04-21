import { useEffect, useState } from 'react';

import { useConnectedMSW } from '@lib/hooks';
import TestCompnent from '@ui/components/TestCompnent';
import request from '@lib/api/request';
import { BoardList } from '@lib/type/msw.type.ts';

function App() {
  const connectMSW = useConnectedMSW();
  const [responseState, setResponseState] = useState<BoardList>();

  useEffect(() => {
    if (connectMSW) {
      (async () => {
        const response = await request.get<string[]>('/boards');
        setResponseState(response);
      })();
    }
  }, [connectMSW]);

  return (
    <>
      <h1>이슈 트래커 리액트</h1>
      <h1>connectMSW: {JSON.stringify(connectMSW)}</h1>
      <h1>responseState: {JSON.stringify(responseState)}</h1>
      <TestCompnent />
    </>
  );
}

export default App;
