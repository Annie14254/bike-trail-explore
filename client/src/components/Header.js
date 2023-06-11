import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import { AiOutlineMenu } from "react-icons/ai";
import { useUserContext } from "../ctx/UserContext";

export default function Header() {
  const [dropNav, setDropNav] = useState(false);
  const { currUser, logout } = useUserContext()
  
  useEffect(() => {
    setDropNav(false);
  }, []);

  return (
    <div className="navbar" id={dropNav ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={() => {setDropNav((prev) => !prev)}}> 
          <AiOutlineMenu /> 
        </button>
      </div>

      <div className="links">
        
        <a href={`/`} id="name" >RideGuide</a>
        {/* <a href={`/maps`} className="navs">Trail</a> */}

        { currUser && (
        <>
          <a href={`/profile`} className="navs">Profile</a>
          <a className="navs" onClick={logout}>Logout</a>
        </>
        )}  

        { !currUser && (
        <>
          <a href={`/signup`} className="navs">Sign Up</a>
          <a href={`/login`} className="navs">Log In</a>
        </>
        )}  
      </div>
    </div>
  )  
}