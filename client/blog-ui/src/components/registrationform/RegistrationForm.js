import {React} from 'react';
import Inputfield from '../forms/Inputfield';

const RegistrationForm = () => {

    const handleSubmit = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(e.target);
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
              <h2 className='login-title'>Register</h2>
              <Inputfield htmlfor='name' title= "Name" type='text' name='name' id='name' required={true} />
              <Inputfield htmlfor='age' title= "Age" type='text' name='age' id='age' required={true}/>
              <Inputfield htmlfor='email' title= "Email" type='email' name='email' id='email' required={true}/>
              <Inputfield htmlfor='phone' title= "Phone" type='text' name='phone' id='phone' />
              <Inputfield htmlfor='city' title= "City" type='text' name='city' id='city' />
              <Inputfield htmlfor='country' title= "Country" type='text' name='country' id='country' />
              <Inputfield htmlfor='password' title= "Password" type='password' name='password' id='password' />
          </div>
          <div className='pb-4'></div>
          <input className="btn btn-primary" type="submit" onSubmit={handleSubmit} value="Register"></input>
      </form>
    </div>
  )
}

export default RegistrationForm
