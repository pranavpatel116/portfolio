import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import Profile from '../assets/images/my.jpg'

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={Profile}  alt="Description"/>
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/pranavpatel116/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/pranav-patel192/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Pranav Patel</h1>
          <p>Senior Mobile Application Developer | Android (Kotlin/Java), Flutter, React Native</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/pranavpatel116/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/pranav-patel192/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;