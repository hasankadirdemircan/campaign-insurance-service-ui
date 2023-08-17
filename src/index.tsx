import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Provider'ı içe aktarıyoruz
import store from './app/store'; // Redux store'umuzu içe aktarıyoruz
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <React.StrictMode>
    <Provider store={store}> {/* Provider'ı ekliyoruz ve store'u iletiyoruz */}
      <App />
    </Provider>
  </React.StrictMode>

);
