import React from "react";
import "./UserInfo.css";
import ProfileImage from "../../assets/profile.JPG";

const UserInfo = () => {
  return (
    <div className="userInfo">
      {/* <div className="userInfo__information"> */}
      <div className="userInfo__header">
        Front-end Developer, Student & Friend
      </div>
      <div className="userInfo__quote">
        I enjoy to make things pleasing to the eyes.
      </div>
      {/* </div> */}
      <img className="userInfo__userImage" src={ProfileImage} alt="" />
    </div>
  );
};

export default UserInfo;
