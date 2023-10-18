import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { CountriesContextProvider } from './context/CountriesContext.tsx'
import { WishlistContextProvider } from './context/WishlistContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <CountriesContextProvider>
          <WishlistContextProvider>
            <App />
          </WishlistContextProvider>
        </CountriesContextProvider>

      </BrowserRouter>

    </NextUIProvider>

  </React.StrictMode>,
)
