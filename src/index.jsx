import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './components/App'
import './index.less'
import { store } from './redux/legacy';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
