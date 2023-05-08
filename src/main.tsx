import ReactDOM from 'react-dom/client';

import { DialogProvider } from '@ui/components/dialog';
import App from './App';
import '@ui/core/globalStyles.css';
import '@ui/core/styleToken.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <DialogProvider>
    <App />
  </DialogProvider>,
);
