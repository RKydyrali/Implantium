import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { AppConvexProvider } from '@/providers/AppConvexProvider'
import { Analytics } from '@vercel/analytics/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppConvexProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <Analytics />
    </AppConvexProvider>
  </StrictMode>,
)
