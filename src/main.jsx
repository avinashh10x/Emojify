import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProviderWrapper } from './utils/ThemeContext.jsx'
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProviderWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProviderWrapper>
  </StrictMode>,
)
