import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {WalletProvider} from './context/WalletContext';
import { MarketplaceProvider } from './context/MarketplaceContext';

ReactDOM.render(
  <WalletProvider>
    <MarketplaceProvider>
      <React.StrictMode>
      <App />
    </React.StrictMode>
    </MarketplaceProvider>
  </WalletProvider>,
  document.getElementById('root')
)
