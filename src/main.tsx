import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ActiveSectionContextProvider from './Context/ActiveSection.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    	<ActiveSectionContextProvider>
      		<App />
    	</ActiveSectionContextProvider>
  </StrictMode>,
)
