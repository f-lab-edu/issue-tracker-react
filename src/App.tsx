import { useConnectedMSW } from '@lib/hooks';
import Router from '@/Router';

function App() {
  useConnectedMSW();
  return <Router />;
}

export default App;
