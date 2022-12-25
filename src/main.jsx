import ReactDOM from 'react-dom/client';
import React from 'react';
import { App } from './app';

import GlobalStyles from './styles/styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
)
