import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'antd/dist/reset.css'
import './i18n.js'
import { SectionProvider } from './components/SectionContext';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SectionProvider>
      <App />
    </SectionProvider>
  </StrictMode>,
)
