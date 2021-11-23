import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './routes';
import './App.css';
import Spinner from './components/shared/Spinner';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
