import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'



const store = configureStore ({
reducer: {},
  devTools :true,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>  
    <App />
    </Provider>
  </StrictMode>,
)
