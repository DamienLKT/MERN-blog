import {React, useState} from 'react';
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
              <Inputfield htmlfor='email' title= "Email" type='email' name='email' id='email' required={true}/>
              <Inputfield htmlfor='password' title= "Password" type='password' name='password' id='password' required={true} />
          </div>
          <div className='pb-4'></div>
          <input className="btn btn-primary" type="submit" onSubmit={handleSubmit} value="Login"></input>
      </form>
    </div>
  )
}

export default LoginForm
