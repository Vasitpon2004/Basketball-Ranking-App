import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import RegisterForm from './pages/auth/components/register-form'
import RegisterPage from './pages/auth/pages/registerPage'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RegisterPage />
  </StrictMode>,
)