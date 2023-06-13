import React, { useState } from 'react';
import '../../styles/loginSignUp.css'


function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage] = useState('');

  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();

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

      const result = await resp.json()
      console.log(result)
      if( result.status === "success" ){
        window.location.href = "/profile"
      }
    };
  
    return (
      <div className="signUpForm">
        <h1 className="title">Login</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button className="button" type="submit">Login</button>
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