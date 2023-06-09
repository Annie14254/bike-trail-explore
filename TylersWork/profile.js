import React from 'react';
import './profile.css';

const UserProfile = () => {
  const updateButton = () => {
    // Update user information logic here
  };

  return (
    <>
      <div className="navbar" id={dropNav ? "open" : "close"}>
        <div className="toggleButton">
          <button onClick={() => {setDropNav((prev) => !prev)}}> 
            <AiOutlineMenu /> 
          </button>
        </div>

        <div className="links">
          
          <a href={`/`} id="name" >RideGuide</a>
          <a href={`/maps`} className="navs">Trail</a>
          <a href={`/profile`} className="navs">Profile</a>
          <a href={`/signup`} className="navs">Sign Up</a>
          <a href={`/login`} className="navs">Log In</a>

        </div>
      </div>
      <div id="top row">
        <div className="col-sm-4 left">
          <h2 id="username">UserName</h2>
          <h3 id="email">Email</h3>
          <h3 id="location">Location</h3>
          <button id="updateuserinfo" onClick={updateButton}>Update User Information</button>
        </div>
        <div className="col-sm-8 right">
          <center><h2>A Little About Me</h2></center>
          <center><textarea name="" placeholder="" id="userInfo" cols="30" rows="10"></textarea></center>
        </div>
        <div className="bottom"></div>
      </div>
      <article className="favoritetrails">
        <div className="map">
          <img src="./mapplaceholderimg.png" className="map" alt="placeholder_map" />
        </div>
        <div className="">
          <div className="test">
            <ul>
              <h2>Favorite Trails</h2>
              <li>Oregon Trail</li>
              <li>Trail Snacks</li>
              <li>That one Trail in Idaho</li>
            </ul>
          </div>
        </div>
      </article>
      <footer>
        <center>
          <div className="footer">
            <br />
            <h4>Made by:</h4>
            <h4>Annie, &nbsp; Alex,&nbsp; Peter,&nbsp; Linkin,&nbsp; Nawal,&nbsp; and&nbsp; Tyler</h4>
            <br />
          </div>
        </center>
      </footer>
  </>
  );
};

export default UserProfile;
