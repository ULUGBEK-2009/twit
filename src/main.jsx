import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { GlobalContext } from './Context/Context.jsx'
import { CookiesProvider } from 'react-cookie'
import App from './App.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <CookiesProvider>
    <GlobalContext>
      <App />
    </GlobalContext>
    </CookiesProvider>
  </BrowserRouter>,
  

)
