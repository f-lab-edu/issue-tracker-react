import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '@ui/pages';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
