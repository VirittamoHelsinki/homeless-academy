import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import { ScrollToTopWhenNavigating } from './utils/utils';
import { AppProvider } from './AppContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppProvider>
      <ScrollToTopWhenNavigating />
      <App />
    </AppProvider>
  </BrowserRouter>
)
