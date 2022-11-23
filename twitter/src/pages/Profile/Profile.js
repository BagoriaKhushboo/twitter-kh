import LeftContent from "../../components/Home/Left/LeftContent";
import RightContent from "../../components/Home/Right/RightContent";
import "./Profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/js/bootstrap";
import { useState } from "react";

function Profile() {
  return (
    <div className="profile">
      <div className="leftContainer">
        <LeftContent />
      </div>
      <div className="centerContainer">
        <h3>profile Page</h3>

        <div className="profileIn">
          <div className="p-photo"></div>
          <div className="p-icon">
            <img
              src="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"
              width="110px"
              height="110px"
              alt=""
            />
          </div>
        </div>
        <nav>
        <ul>
          <li>
            <a href="#">For you</a>
          </li>
          <li>
            <a href="#">Trending</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Sports</a>
          </li>
          <li>
            <a href="#">Entertainment</a>
          </li>
        </ul>
      </nav>
      </div>
      <div className="rightContainer">
        <RightContent />
      </div>
    </div>
  );
}

export default Profile;
