import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TodosFetchAxios from './TodosFetchAxios.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodosFetchAxios />
  </StrictMode>,
)
