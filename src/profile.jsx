// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./profile.css";
import Photo from "./profile.jpeg";

const Profile = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="card">
      <img src={Photo} alt="Student Photo" className="photo-img" />
      <h2 className="title">Name: Gayathri Raj</h2>
      <p className="details">Registration No: 212221230028</p>
      <p className="details">Course : B.Tech(AI&DS)</p>

      <button className="toggle-button" onClick={toggleVisibility}>
        {isVisible ? "Hide Details" : "Show Details"}
      </button>
      {isVisible && (
        <div className="additional-info">
          <p>Blood Group: B+</p>
          <p>Date of Birth: 18/6/2004</p>
          <p>Contact:9876543210</p>
          <p>Address:xy street,Vellore.</p>
        </div>
      )}
    </div>
  );
};

export default Profile;