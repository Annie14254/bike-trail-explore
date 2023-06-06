import React, { useState, useEffect } from "react";
import { checkPassword, validateEmail } from "../../utils/helpers.js";
import "./style.css";


function Form() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  // const [confirmPass, setConfirmPass] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setPassword(inputValue);
    // } else {
    //   setConfirmPass(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      return;
    }
    if (!checkPassword(password)) {
      setErrorMessage(
        `Choose a more secure password for the account: ${userName}`
      );
      return;
    }

    setUserName('');
    setPassword('');
    setEmail('');
  };
  
  
  return (
    <div>
      {/* <p>Hello {userName}</p> */}
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
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
          placeholder="Password"
        />
        {/* <input 
          value={confirmPass}
          name="confirmPass"
          onChange={handleInputChange}
          type="confirmPass"
          placeholder="Confirm Password"
        /> */}
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