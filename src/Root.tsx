import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configure from './store/configure';
import App from './components/App';
import { HelmetProvider } from 'react-helmet-async';

const store = configure();

function Root() {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </HelmetProvider>
  );
}

export default Root;
