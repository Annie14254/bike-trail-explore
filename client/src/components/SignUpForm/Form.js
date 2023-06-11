import React, { useState } from "react";
import { checkPassword, validateEmail } from "../../utils/helpers.js";
import "../../styles/SignUp.css";


function Form() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  // const [ signupResult, setSignupResult ] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else if (inputType === 'password') {
      setPassword(inputValue);
    } else {
      setConfirmPass(inputValue);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      return;
    }
    if (!checkPassword(password)) {
      setErrorMessage(
        `Please choose a password 7-14 characters long with no special characters ($, @, &, etc.)`
      );
      return;
    }
    if (confirmPass !== password) {
      setErrorMessage("Passwords do not match")
      return;
    }

    const query = await fetch("/api/user/create-user", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        username: userName,
        password: password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const result = await query.json()

    if( result.status !== "success" || !result.payload ) {
      console.error("fail")
    } else {
      document.location.replace("/login")
    }

    
    // console.log(result)
    


    setUserName('');
    setPassword('');
    setEmail('');
    setConfirmPass('');
  };
  
  
  return (
    <div className="container">
      <p className="title">Welcome to Ride Guide, please sign up to be able to leave reviews and comments on trails!</p>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="email"
        />
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
        />
        <input
          value={password}
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="password"
        />
        <input 
          value={confirmPass}
          name="confirmPass"
          onChange={handleInputChange}
          type="password"
          placeholder="confirm password"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  )  
}


export default Form;