import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  showTechDetails = (e) => {
    e.preventDefault();
      return(
        <div className="tech-details">
            <p>React Router</p>
        </div>
      )
    };
  render() {
    return (
      <div className="main-content about">
        <h2>About</h2>
        <div className="about-overview">
          <h4>Overview</h4>
          <p>Web Application built to simulate the 'Instagram' experience in a Web browser. Has a main page displaying all of the recently posted photos. Each user can navigate to their unique profile page where they are able to upload images which are then displayed on their timeline. </p>
        </div>
        <div className="about-tech-details">
          <h4>Tech Stack</h4>
          <p>This application is built entirely in React JS. All state is managed locally within the application, making it's responsiveness as fast as possible. I have included the use of React Router for ease of navigation between pages.  </p>
        </div>
      </div>
    );
  }
}

export default About;
