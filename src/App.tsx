import React, { useState, useEffect } from 'react';
import logo from './reactLogo.svg';
import saarLogo from './assets/logo.svg'
import './App.css';
import Typography from '@mui/material/Typography';

interface AppProps { }


function App({ }: AppProps) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={saarLogo} style={{ width: 200, objectFit: 'fill' }} />
        <img src={logo} className="App-logo" alt="logo" />

        <Typography variant='h1'>
          Human Computer Interface
        </Typography>
        <Typography variant='h3'>
          Group 7
        </Typography>
      </header>
    </div>
  );
}

export default App;
