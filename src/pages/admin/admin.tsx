import React from 'react'
import ReactDOM from 'react-dom/client'
import AuthForm from '../../components/AuthForm'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <h1>Admin authentication</h1>
    <AuthForm/>
  </React.StrictMode>,
)