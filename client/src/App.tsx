import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

import AppRoutes from './routes';
import Spinner from './components/shared/Spinner';
import store from './state/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
