import ThemeProvider from '@mui/material/styles/ThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import muiTheme from './theme/muiTheme';

ReactDOM.render(
  <ThemeProvider theme={muiTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </ThemeProvider>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
