import {React, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Inputfield from '../forms/Inputfield';

const LoginForm = () => {
    const defaultInput = {
        email:'',
        password:''
    };
    const handleInputChange = (e) => {
        const target = e.target;
        var value = target.value;
        const name = target.name;
        this.setState({
          [name]: value,
        });
      }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email);
        console.log(password);
        try{

        }catch{
            console.log('Error: ${err.message}');
        }

    }
    

  return (
    <div>
      <form onSubmit={handleSubmit} method='POST'>
          <div>
              <h2 className='login-title'>Login</h2>
              <Inputfield htmlfor='email' type='email' name='email' id='email' />
              <div className="form-group pb-3">
                  <label htmlFor='email'>Email:</label>
                  <input className="form-control"  type="email" name="email" id="email" required></input>
              </div>
              <div className="form-group pb-3">
                  <label htmlFor='password'>Password:</label>
                  <input className="form-control" type="password" name="password" id="password" required></input>
              </div>
          </div>
          <div className='pb-4'></div>
          <Button as='input' variant="primary" type="submit" onSubmit={handleSubmit} value="Login"></Button>
      </form>
    </div>
  )
}

export default LoginForm
