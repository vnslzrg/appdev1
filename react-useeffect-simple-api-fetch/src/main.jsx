import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PostsFetchAsync from './PostsFetchAsync.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostsFetchAsync />
  </StrictMode>,
)
