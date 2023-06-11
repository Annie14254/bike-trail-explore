import React, { useState } from 'react';
import '../../styles/LogIn.css'

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // if (username === 'admin' && password === 'password') {
      //   setErrorMessage("Login Successful!");
      // } else {
      //   alert('Invalid username or password. Please try again.');
      //   setErrorMessage('Invalid username or password. Please try again.')
      // }

      const resp = await fetch("/api/user/auth", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const result = resp
      console.log(result)
      // document.location.replace("/")

    };
  
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="submit">Login</button>
        </form>
        {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
        )}
      </div>
    );
  }
  
  export default App;