import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AppConvexProvider } from '@/providers/AppConvexProvider'
import { Analytics } from '@vercel/analytics/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppConvexProvider>
      <App />
      <Analytics />
    </AppConvexProvider>
  </StrictMode>,
)
