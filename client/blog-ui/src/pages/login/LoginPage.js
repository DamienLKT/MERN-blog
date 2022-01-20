import React from 'react'
import LoginForm from '../../components/loginform/LoginForm'
import './login.css'

function LoginPage() {
  return (
    <div class="login-component">
        <div className='card login-card-size'>
          <div className='card-body'>
              <LoginForm/>
          </div>
        </div>
    </div>
  )
}

export default LoginPage
