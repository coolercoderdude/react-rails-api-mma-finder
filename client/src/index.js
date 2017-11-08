import React from 'react';
import ReactDOM from 'react-dom';
import store from './configureStore';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />,
    document.getElementById('root')
  </Provider>
);
registerServiceWorker();
