import {React, useState} from 'react';
import Inputfield from '../forms/Inputfield';
import axios from 'axios';

const RegistrationForm = () => {
    const [passwordError, setPasswordError] = useState("");

    //validation for password
    const validate = (password) =>{
        let passwordError = "";
        
        if (!password) {
            setPasswordError("Password field is required")
            return false
        }
        const reg = /^(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;
        if (!password || reg.test(password) === false) {
            setPasswordError("Password should have minimum eight characters, at least 1 uppercase character, one number and one special character");
            return false;
        }
        setPasswordError("");
        return true
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const age = e.target.age.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const city = e.target.city.value;
        const country = e.target.country.value;
        const password = e.target.password.value;
        const data = { 
            'name': name,
            'age': age,
            'email':email,
            'phone':phone,
            'city':city,
            'country':country,
            'password':password
        }

        console.log(validate(password));
        console.log(data);
        console.log(password);
        if(!validate(password)){
            return;
        }
        try{
            console.log("password ok");
            await axios.post('http://localhost:5000/api/users/', JSON.stringify(data), {
                headers: { "Content-Type": "application/json" }})
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
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
              <span className="text-danger">{passwordError}</span>
          </div>
          <div className='pb-4'></div>
          <input className="btn btn-primary" type="submit" onSubmit={handleSubmit} value="Register"></input>
      </form>
    </div>
  )
}

export default RegistrationForm
