import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/profile.css';
import profilePicture from '../styles/images/fillerbicyclist.jpeg';
import '../styles/images/mapplaceholderimg.png';


let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-file");

const ProfilePicPicker = () => {
  const [profilePic, setProfilePic] = useState(null);

  const handlePicChange = (event) => {
    const selectedPic = event.target.files[0];
    setProfilePic(URL.createObjectURL(selectedPic));
  }



  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="left">
            <center>
              <h2 className="pd" id="username">UserName</h2>
              <h3 className="pd" id="email">Email</h3>
              <h3 className="pd" id="location">Location</h3>
              <button id="updateuserinfo">
                Update User Information
              </button>
            </center>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="right">
            <center>
              <h2 className="pd">Profile Picture</h2>
            </center>
            <center>
            <input type="file" accept="image/*" onChange={handlePicChange} />
            {profilePic && (
              <img
                className="profile-pic"
                src={profilePic}
                alt="Profile"
                style={{ height: '10em', width: '10em', borderRadius: '50%' }}
              />
            )}
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProfilePicPicker;