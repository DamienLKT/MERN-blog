import { React, useState } from "react";
import Inputfield from "../forms/Inputfield";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  // const validate = (email,password) =>{
  //     let emailError = "";
  //     let passwordError = "";
  //     const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //     if (!email || reg.test(email) === false) {
  //     emailError = "Email Field is Invalid ";
  //     }
  //     if (!password) {
  //     passwordError = "Password field is required";
  //     }
  //     if (emailError || passwordError) {
  //     this.setState({emailError, passwordError });
  //     return false;
  //     }
  //     return true;
  // }

  // const handleInputChange = (e) => {
  //     const target = e.target;
  //     var value = target.value;
  //     const name = target.name;
  //     this.setState({
  //       [name]: value,
  //     });
  //   }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = { email: email, password: password };    
    console.log(data);
    console.log(password);
    try {
      await axios
        .post("http://localhost:5000/api/users/login", JSON.stringify(data), {
          headers: { "Content-Type": "application/json" },
        })
        .then(function (response) {
          console.log(response);
          sessionStorage.loggedin = true;
          console.log(sessionStorage);
          navigate("/")
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch {
      console.log("Error: ${err.message}");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} method="POST">
        <div>
          <h2 className="login-title">Login</h2>
          <Inputfield
            htmlfor="email"
            title="Email"
            type="email"
            name="email"
            id="email"
            required={true}
          />
          <Inputfield
            htmlfor="password"
            title="Password"
            type="password"
            name="password"
            id="password"
            required={true}
          />
        </div>
        <div className="pb-4"></div>
        <input
          className="btn btn-primary"
          type="submit"
          onSubmit={handleSubmit}
          value="Login"
        ></input>
      </form>
    </div>
  );
};

export default LoginForm;
