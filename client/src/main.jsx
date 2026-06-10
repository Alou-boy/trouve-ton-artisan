import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Bootstrap (CSS + JS pour le menu responsive)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Mes styles Sass (charte graphique)
import './styles/main.scss'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)