import React from 'react'
import '../login/login.css'
import RegistrationForm from '../../components/registrationform/RegistrationForm'

function RegisterPage() {
  return (
    <div className="login-component">
        <div className='card login-card-size'>
          <div className='card-body'>
              <RegistrationForm/>
          </div>
        </div>
    </div>
  )
}

export default RegisterPage
