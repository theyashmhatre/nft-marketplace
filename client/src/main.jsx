import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {WalletProvider} from './context/WalletContext';
import { MarketplaceProvider } from './context/MarketplaceContext';

ReactDOM.render(
      <React.StrictMode>
      <App />
    </React.StrictMode>,
  document.getElementById('root')
)
